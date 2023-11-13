import { prisma } from '@/config';

export async function createLog(message: string) {
  return prisma.log.create({
    data: {
      message,
    },
  });
}
