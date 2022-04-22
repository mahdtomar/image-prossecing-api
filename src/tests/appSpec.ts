import supertest from 'supertest';
import app from '../server/app';
import { prossesimage } from '../resizing';
import * as fs from 'fs';
import path from 'path';
const request = supertest(app);

describe('testing the server', () => {
    it('should return status of 200', async () => {
        const response = await request.get('/');
        expect(response.status).toBe(200);
    });
});
describe('testing the endpoint', () => {
    it('should return status of 200', async () => {
        const response = await request.get('/');
        expect(response.status).toBe(200);
    });
});
describe('testing the resizing function', () => {
    // name: string,
    // width: number,
    // height: number,
    // fullName: string,
    // outputPath: string,
    // sourcePath: string,
    // valid: boolean
    prossesimage(
        'one.jpg',
        345,
        345,
        'one.jpg_345_345.jpg',
        'cashe',
        'src/images',
        true
    );
    it('should resize the image and save it in the cashe folder', () => {
        expect(
            fs.existsSync(
                path.resolve(path.join('cashe', 'one.jpg_345_345.jpg'))
            )
        ).toBe(true);
    });
});
