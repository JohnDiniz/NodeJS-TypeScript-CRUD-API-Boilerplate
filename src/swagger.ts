import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import express from 'express';

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

const swaggerSpec = swaggerJSDoc(options);

const app = express();

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

export default app;
