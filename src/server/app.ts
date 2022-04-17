import express, { Response, Request } from 'express';
import * as fs from 'fs';
import sharp from 'sharp';

const app = express();
const port = 3000;
app.get('/', (req: Request, res: Response) => {
    res.send('hello');
});
let imageName: object;
let name: string;
let width: string;
let height: string;
app.get(['/images', 'images'], (req, res) => {
    // getting data from the request query
    imageName = req.query;
    name = req.query.name as string;
    width = req.query.width as string;
    height = req.query.height as string;
    const displayPath = `C:\\Users\\Administrator\\Documents\\GitHub\\image-prossecing-api\\dist\\cash`;
    const sourcePath = `src\\images`;
    try {
        // checking if the image already exists
        if (fs.existsSync(`dist\\cash\\${name}`) == true) {
            res.sendFile(`dist\\cash\\${name}`);
        } else if (fs.existsSync(`${sourcePath}\\${name}`) == true) {
            // resizing the new image and saving it in the cash file
            sharp(`${sourcePath}\\${name}`)
                .resize(parseInt(width), parseInt(height))
                .jpeg()
                .toFile(`${displayPath}\\${name}_${width}_${height}.jpg`);
            setTimeout(() => {
                res.sendFile(`${displayPath}\\${name}_${width}_${height}.jpg`);
            }, 500);
        } else {
            // if the image is not found in the src folder
            res.send("this image : '" + name + "' is not found");
        }
    } catch (err) {
        res.send(`the error is ${err}`);
        // console.error(err)
    }
});

app.listen(port, () => {
    console.log(`server is running on port${port}`);
});
