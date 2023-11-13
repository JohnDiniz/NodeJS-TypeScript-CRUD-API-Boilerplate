"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logController = void 0;
const services_1 = require("@/services");
const http_status_1 = __importDefault(require("http-status"));
const logger_1 = __importDefault(require("@/utils/logger"));
async function logController(req, res) {
    try {
        const { message } = req.body;
        const logMessage = await (0, services_1.CreateLogMessage)(message);
        res.status(http_status_1.default.CREATED).json(logMessage);
    }
    catch (error) {
        logger_1.default.error(error);
        res.status(http_status_1.default.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
    }
}
exports.logController = logController;
