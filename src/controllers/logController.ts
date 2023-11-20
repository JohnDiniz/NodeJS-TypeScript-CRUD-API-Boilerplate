import { Request, Response } from 'express';
import httpStatus from 'http-status';
import xss from 'xss'; // Import the xss library
import { CreateLogMessage } from '@/services';
import logger from '@/utils/logger';

export async function logController(req: Request, res: Response) {
  try {
    let { message } = req.body;

    message = xss(message);

    const logMessage = await CreateLogMessage(message);
    res.status(httpStatus.CREATED).json(logMessage);
  } catch (error) {
    logger.error(error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
  }
}
