"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBody = void 0;
const logger_1 = __importDefault(require("@/utils/logger"));
const validateBody = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            const validationErrors = error.details.map((detail) => detail.message);
            logger_1.default.error(`Validation error: ${validationErrors.join(', ')}`);
            return res.status(400).json({ message: 'Validation error', errors: validationErrors });
        }
        return next();
    };
};
exports.validateBody = validateBody;
