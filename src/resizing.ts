import * as fs from 'fs';
import sharp from 'sharp';
import path from 'path';

export async function prossesimage(
    name: string,
    width: number,
    height: number,
    fullName: string,
    outputPath: string,
    sourcePath: string,
    valid: boolean
): Promise<void> {
    if (valid === true) {
        // function to resize the images
        try {
            // checking if the image already exists
            if (fs.existsSync(`${outputPath}/${fullName}`) == false) {
                // resizing the new image and saving it in the cashe folder
                await sharp(`${sourcePath}/${name}`)
                    .resize(width, height)
                    .jpeg()
                    .toFile(`${path.resolve(outputPath)}/${fullName}`);
            }
        } catch (err) {
            console.error(err);
        }
    }
}
