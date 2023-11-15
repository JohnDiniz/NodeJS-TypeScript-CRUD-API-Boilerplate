import express, { Express } from 'express';
import swaggerUI from 'swagger-ui-express';
import swaggerDocument from './swagger.json'; // Importe diretamente o arquivo JSON
import { connectDb } from '@/config';
import { healthRouter, logRouter } from '@/routers';

const app = express();

app.use(express.json());
app.use('/health', healthRouter);
app.use('/log', logRouter);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export default app;
