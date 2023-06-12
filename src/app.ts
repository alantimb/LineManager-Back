import express from 'express';
import cors from 'cors';

const app = express();

app
    .use(cors())
    .use(express.json())
    .get('/health', (req, res) => {
        res.status(200).send("Ok!")
    });

export default app;