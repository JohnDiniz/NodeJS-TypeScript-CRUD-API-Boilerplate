import { disconnectDB } from './config';
import app, { init } from '@/app';

const port = +process.env.PORT || 3000;

init().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});

process.on('SIGINT', async () => {
  try {
    disconnectDB();
    console.log('Prisma Client has been disconnected');
    process.exit(0);
  } catch (error) {
    console.error('Error while disconnecting Prisma Client', error);
    process.exit(1);
  }
});
