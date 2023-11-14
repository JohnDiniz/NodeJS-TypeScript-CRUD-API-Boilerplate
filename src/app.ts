import express, { Express } from 'express';
import { healthRouter, logRouter } from '@/routers';
import { connectDb } from '@/config';
import { swaggerSpec } from '@/swagger';
import swaggerUI from 'swagger-ui-express';

const app = express();

app.use(express.json());
app.use('/health', healthRouter);
app.use('/log', logRouter);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export default app;
