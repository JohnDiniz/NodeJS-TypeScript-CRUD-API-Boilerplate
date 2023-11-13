// /Users/joaovitordinizmistrinel/Documents/GitHub/template-server/src/routers/logRouter.ts
import express from 'express';
import { logController } from '@/controllers';
import { validateBody } from '@/middlewares';
import { logSchema } from '@/schemas';

/**
 * @swagger
 * tags:
 *   name: Logs
 *   description: API endpoints for managing logs
 */

const router = express.Router();

/**
 * @swagger
 * /log:
 *   post:
 *     summary: Create a new log
 *     tags: [Logs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: 'object'
 *             properties:
 *               message:
 *                 type: 'string'
 *             required:
 *               - 'message'
 *     responses:
 *       '201':
 *         description: Created
 *         content:
 *           application/json:
 *             example:
 *               logMessage: { message: 'Log created successfully' }
 *       '400':
 *         description: Bad Request
 *         content:
 *           application/json:
 *             example:
 *               message: Validation error
 *               errors: ['message is required']
 */

router.post('/', validateBody(logSchema), logController);
export { router as logRouter };
