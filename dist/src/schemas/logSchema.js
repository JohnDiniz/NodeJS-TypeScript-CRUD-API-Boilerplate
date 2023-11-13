"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.logSchema = joi_1.default.object({
    message: joi_1.default.string().required(),
});
