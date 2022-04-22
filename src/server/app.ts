import express, { Response, Request } from 'express';
import images from './routers/imageProcessing';
const app = express();
const port = 3000;
app.get('/', (req: Request, res: Response): void => {
    res.send('hello');
});
app.use('/images', images);

app.listen(port, (): void => {
    console.log(`server is running on port${port}`);
});

export default app;
