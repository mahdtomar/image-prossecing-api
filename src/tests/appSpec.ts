import supertest from 'supertest';
import app from '../server/app';
const request = supertest(app);

describe('testing the server', () => {
    it('should return status of 200', async () => {
        const response = await request.get('/');
        expect(response.status).toBe(200);
    });
});
describe('testing the api endpoint ', () => {
    it('should return status of 200', async () => {
        const response = await request.get('/images');
        expect(response.status).toBe(200);
    });
});
