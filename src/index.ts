import express, { Application} from 'express';
import { router } from './routes/routes';
import "express-async-errors";
import { errorHandler } from './shared/errors';
import mongoose from 'mongoose';
const bodyParser = require('body-parser');


const app: Application = express();

require('dotenv').config()
app.use(bodyParser.json());


const porta = process.env.PORT
const msg: string = `Server Running port ${porta}`;
app.listen(porta, () => console.log(msg));

const url_connect = process.env.MONGODB_URL
mongoose.connect(`${url_connect}`);

app.use('/users', router);
// app.post('/', async (req: Request, res: Response) => {
//         const user = new User({
//             _id: req.body._id,
//             username: req.body.username,
//             email: req.body.email,
//             password: req.body.password,
//             photo: req.body.photo,
//         });
//         await user.save()
//         return res.status(201).send(user);
// });


app.use(errorHandler)