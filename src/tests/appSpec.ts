import supertest from 'supertest';
import express, { Request, Response } from 'express';
import app from '../server/app';
import { prossesimage } from '../server/routers/imageProcessing';
import * as fs from 'fs';
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
describe('resizing function ', () => {
    it('should send "image not found" if the image isnt in the source folder', async () => {
        const response = await request.get(
            'images?name=one.jpg&width=234&height=100'
        );
        expect(response.status).toBe(305);
    });
});
