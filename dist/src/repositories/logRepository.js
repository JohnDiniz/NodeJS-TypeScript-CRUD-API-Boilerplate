"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLog = void 0;
const config_1 = require("@/config");
async function createLog(message) {
    return config_1.prisma.log.create({
        data: {
            message,
        },
    });
}
exports.createLog = createLog;
