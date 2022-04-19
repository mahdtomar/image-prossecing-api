import Express, { Response, Request } from 'express';
import * as fs from 'fs';
import sharp from 'sharp';
import path from 'path';

const images = Express.Router();

images.get('/', (req: Request, res: Response) => {
    // getting data from the request query
    const name: string = req.query.name as string;
    const width: string = req.query.width as string;
    const height: string = req.query.height as string;
    const fullName = `${name}_${width}_${height}.jpg`;
    const outputPath = `cashe`;
    const sourcePath = `src/images`;
    // validating the inputs
    if (parseInt(height) && parseInt(width)) {
        prossesimage(
            name,
            parseInt(width),
            parseInt(height),
            req,
            res,
            fullName,
            outputPath,
            sourcePath
        );
    } else {
        res.send('invalid input : width and height MUST be numbers');
    }
});
export async function prossesimage(
    name: string,
    width: number,
    height: number,
    req: Request,
    res: Response,
    fullName: string,
    outputPath: string,
    sourcePath: string
) {
    // function to resize the images
    try {
        // checking if the image already exists
        if (fs.existsSync(`${outputPath}/${fullName}`)) {
            res.sendFile(`${path.resolve(outputPath)}/${fullName}`);
        } else if (fs.existsSync(`${sourcePath}/${name}`) == true) {
            // resizing the new image and saving it in the cashe folder
            await sharp(`${sourcePath}/${name}`)
                .resize(width, height)
                .jpeg()
                .toFile(`${path.resolve(outputPath)}/${fullName}`);
            res.sendFile(`${path.resolve(outputPath)}/${fullName}`);
        } else {
            // if the image is not found in the src/images folder
            res.status(305);
            res.send("this image : '" + name + "' is not found");
        }
    } catch (err) {
        console.error(err);
    }
}
export default images;
