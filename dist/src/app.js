"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
// /Users/joaovitordinizmistrinel/Documents/GitHub/template-server/src/app.ts
const express_1 = __importDefault(require("express"));
const routers_1 = require("@/routers");
const config_1 = require("@/config");
const swagger_1 = __importDefault(require("../src/swagger")); // Import the generated Swagger documentation
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/health', routers_1.healthRouter);
app.use('/log', routers_1.logRouter);
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.default));
function init() {
    (0, config_1.connectDb)();
    return Promise.resolve(app);
}
exports.init = init;
exports.default = app;
