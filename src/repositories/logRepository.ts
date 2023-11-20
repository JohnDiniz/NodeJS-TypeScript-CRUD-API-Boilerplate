import { Log } from '@prisma/client';
import { prisma } from '@/config';

export async function createLog(message: string): Promise<Log> {
  const newLog = await prisma.log.create({
    data: {
      message,
    },
  });
  return newLog as Log; // Return the created log with the Log type
}
