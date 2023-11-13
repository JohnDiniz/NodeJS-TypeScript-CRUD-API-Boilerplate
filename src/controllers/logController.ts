import { CreateLogMessage } from '@/services';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import logger from '@/utils/logger';

export async function logController(req: Request, res: Response) {
  try {
    const { message } = req.body;

    const logMessage = await CreateLogMessage(message);
    res.status(httpStatus.CREATED).json(logMessage);
  } catch (error) {
    logger.error(error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
  }
}
