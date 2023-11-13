"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// /Users/joaovitordinizmistrinel/Documents/GitHub/template-server/src/swagger.ts
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const express_1 = __importDefault(require("express"));
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Your API Title',
            version: '1.0.0',
            description: 'Your API Description',
        },
    },
    apis: ['./src/routers/*.ts', './src/schemas/*.ts', './src/controllers/*.ts'],
    components: {
        schemas: {
            Log: {
                type: 'object',
                properties: {
                    message: { type: 'string' },
                },
                required: ['message'],
            },
        },
    },
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
const app = (0, express_1.default)();
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
exports.default = app;
