"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLogMessage = void 0;
const repositories_1 = require("@/repositories");
async function CreateLogMessage(message) {
    const logMessage = await (0, repositories_1.createLog)(message);
    return { logMessage };
}
exports.CreateLogMessage = CreateLogMessage;
