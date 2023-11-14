// template-server/src/routers/logRouter.ts
import express from 'express';
import { logController } from '@/controllers';
import { validateBody } from '@/middlewares';
import { logSchema } from '@/schemas';

const router = express.Router();

router.post('/', validateBody(logSchema), logController);
export { router as logRouter };
