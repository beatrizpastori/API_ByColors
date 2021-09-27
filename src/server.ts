import express from 'express';
import "./database";
import { routes } from './routes';
import cors from 'cors';

const app = express();

app.use(cors({
    origin:'*'
}));

app.use(express.json());

app.use(routes);

app.listen(3333, () => console.log("Server is running on port 3333"));