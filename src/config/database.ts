import { PrismaClient } from '@prisma/client';

export let prisma: PrismaClient | undefined;

export function connectDb(): void {
  if (process.env.NODE_ENV === 'development') {
    prisma = new PrismaClient({ log: ['query'] });
  } else {
    prisma = new PrismaClient();
  }
}

export async function disconnectDB(): Promise<void> {
  await prisma?.$disconnect();
}
