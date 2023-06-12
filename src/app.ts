import express, { Request, Response } from 'express';
import cors from 'cors';
import databaseConnections from './config/database';
import { userRouter } from './routers';

const app = express();

app
    .use(cors())
    .use(express.json())
    .get('/health', (_req, res) => res.send('OK!'))
    .use('/users', userRouter)

export function init() {
    databaseConnections.connectDb();
    return Promise.resolve(app);
}

export async function close(): Promise<void> {
    await databaseConnections.disconnectDB();
  }

export default app;