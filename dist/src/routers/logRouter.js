"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logRouter = void 0;
// /Users/joaovitordinizmistrinel/Documents/GitHub/template-server/src/routers/logRouter.ts
const express_1 = __importDefault(require("express"));
const controllers_1 = require("@/controllers");
const middlewares_1 = require("@/middlewares");
const schemas_1 = require("@/schemas");
/**
 * @swagger
 * tags:
 *   name: Logs
 *   description: API endpoints for managing logs
 */
const router = express_1.default.Router();
exports.logRouter = router;
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
router.post('/', (0, middlewares_1.validateBody)(schemas_1.logSchema), controllers_1.logController);
