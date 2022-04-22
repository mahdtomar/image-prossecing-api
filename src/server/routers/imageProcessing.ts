import Express, { Response, Request } from 'express';
import * as fs from 'fs';
import path from 'path';
import { prossesimage } from '../../resizing';
const images = Express.Router();

images.get('/', async (req: Request, res: Response): Promise<void> => {
    // getting data from the request query
    const name: string = req.query.name as string;
    const width: string = req.query.width as string;
    const height: string = req.query.height as string;
    const fullName = `${name}_${width}_${height}.jpg`;
    const outputPath = `cashe`;
    const sourcePath = path.join('src', 'images');
    let valid: boolean;
  
        // validating the input
        if (parseInt(width) > 0 && parseInt(height) > 0) {
            valid = true;
        } else {
            valid = false;
            res.send(
                `invalid input: width and height must be numbers and above 0 `
            );
        }
        if (fs.existsSync(`${outputPath}/${fullName}`)) {
            // sending the image from the cashe file
            res.sendFile(path.join(path.resolve(outputPath), fullName));
        } else if (fs.existsSync(path.join(sourcePath, name))) {
            // resizing the image if it exists in the source folder then displaying it
            await prossesimage(
                name,
                parseInt(width),
                parseInt(height),
                fullName,
                outputPath,
                sourcePath,
                valid
            );
            res.sendFile(path.resolve(path.join(outputPath, fullName)));
           
        } else if (fs.existsSync(`${sourcePath}/${name}`) == false) {
            // if the image doesn't exist in the source folder
            res.send(
                `sorry this image "${name}" doesn't exist in the source folder`
            );
        } else {
            res.send("couldn't resize the image");
        }
});

export default images;
