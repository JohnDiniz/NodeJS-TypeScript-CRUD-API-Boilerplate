import swaggerJSDoc from 'swagger-jsdoc';
import path from 'path';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Your API Title',
      version: '1.0.0',
      description: 'Your API Description',
    },
  },
  apis: [path.resolve(__dirname, 'swagger.yaml')],
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

export const swaggerSpec = swaggerJSDoc(options);
