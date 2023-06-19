import express, { Request, Response } from 'express';
import cors from 'cors';
import databaseConnections from './config/database';
import router from './routers';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app
    .use(cors())
    .use(express.json())
    .get('/health', (_req: Request, res: Response) => res.send('OK!'))
    .use('/users', router.userRouter)
    .use('/companies', router.companyRouter)
    .use('/auth', router.authenticationRouter)

export function init() {
    databaseConnections.connectDb();
    return Promise.resolve(app);
}

export async function close(): Promise<void> {
    await databaseConnections.disconnectDB();
  }

export default app;