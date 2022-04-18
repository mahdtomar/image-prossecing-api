import express, { Response, Request } from 'express';
import * as fs from 'fs';
import sharp from 'sharp';
import path from 'path'; // to change the pathes to absolute pathes

const app = express();
const port = 3000;
app.get('/', (req: Request, res: Response) => {
    res.send('hello');
});

let name: string;
let width: string;
let height: string;
let fullName: string;

app.get('/images', (req, res) => {
    // getting data from the request query
    name = req.query.name as string;
    width = req.query.width as string;
    height = req.query.height as string;
    fullName = `${name}_${width}_${height}.jpg`;
    const displayPath = `dist\\cashe`;
    const sourcePath = `src\\images`;
    // function to resize the images
    async function prossesimage() {
        try {
            if (fs.existsSync(`${displayPath}\\${fullName}`)) {
                res.sendFile(`${path.resolve(displayPath)}\\${fullName}`);
            } else if (fs.existsSync(`${sourcePath}\\${name}`) == true) {
                // resizing the new image and saving it in the cashe file
                await sharp(`${sourcePath}\\${name}`)
                    .resize(parseInt(width), parseInt(height))
                    .jpeg()
                    .toFile(`${path.resolve(displayPath)}\\${fullName}`);
                res.sendFile(`${path.resolve(displayPath)}\\${fullName}`);
            } else {
                // if the image is not found in the src/images folder
                res.send("this image : '" + name + "' is not found");
            }
        } catch (err) {
            console.error(err);
        }
    }
    prossesimage();
});

app.listen(port, () => {
    console.log(`server is running on port${port}`);
});

export default app;
