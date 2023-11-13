"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importStar(require("@/app"));
const client_1 = require("@prisma/client");
// Create a new Prisma client instance for testing
const prisma = new client_1.PrismaClient();
beforeAll(async () => {
    await (0, app_1.init)();
});
afterAll(async () => {
    // Disconnect the Prisma client after all tests are done
    await prisma.$disconnect();
});
const server = (0, supertest_1.default)(app_1.default);
describe('POST /log', () => {
    it('should create a log entry and respond with status 201', async () => {
        const logMessage = 'This is a test log message';
        // Send a POST request to create a log entry
        const response = await server.post('/log').send({ message: logMessage });
        // Expect the response status to be 201 Created
        expect(response.status).toBe(http_status_1.default.CREATED);
        // Expect the response body to contain the created log entry
        expect(response.body).toEqual(expect.objectContaining({
            id: expect.any(Number),
            message: logMessage,
            createdAt: expect.any(String),
        }));
        // Verify that the log entry is stored in the database
        const logEntry = await prisma.log.findFirst({
            where: { message: logMessage },
        });
        expect(logEntry).toBeTruthy();
    });
    it('should handle errors and respond with status 500 for invalid input', async () => {
        // Send a POST request with invalid input (missing "message" field)
        const response = await server.post('/log').send({});
        // Expect the response status to be 500 Internal Server Error
        expect(response.status).toBe(http_status_1.default.INTERNAL_SERVER_ERROR);
    });
});
