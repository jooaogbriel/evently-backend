import express, { Application, Response, json, Request } from 'express';

const app: Application = express();
app.use(json());

const PORT: number = 3000;
const msg: string = `Server Running port ${PORT}`;
app.listen(PORT, () => console.log(msg));

app.get('/', (req: Request, res: Response)=> {
    return res.json()
}) 