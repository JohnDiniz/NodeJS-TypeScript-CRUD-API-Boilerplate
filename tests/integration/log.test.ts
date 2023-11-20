import httpStatus from 'http-status';
import supertest from 'supertest';
import { PrismaClient } from '@prisma/client';
import app, { init } from '@/app';

// Create a new Prisma client instance for testing
const prisma = new PrismaClient();

beforeAll(async () => {
  await init();
});

afterAll(async () => {
  // Disconnect the Prisma client after all tests are done
  await prisma.$disconnect();
});

const server = supertest(app);

describe('POST /log', () => {
  it('should create a log entry and respond with status 201', async () => {
    const logMessage = 'This is a test log message';

    // Send a POST request to create a log entry
    const response = await server.post('/log').send({ message: logMessage });

    // Expect the response status to be 201 Created
    expect(response.status).toBe(httpStatus.CREATED);

    // Expect the response body to contain the created log entry
    expect(response.body).toMatchObject({
      id: expect.any(String),
      message: expect.any(String),
      createdAt: expect.any(String),
    });

    // // Verify that the log entry is stored in the database
    // const logEntry = await prisma.log.findFirst({
    //   where: { message: logMessage },
    // });

    // expect(logEntry).toBeTruthy();
  });

  // it('should handle errors and respond with status 500 for invalid input', async () => {
  //   // Send a POST request with invalid input (missing "message" field)
  //   const response = await server.post('/log').send({});

  //   // Expect the response status to be 500 Internal Server Error
  //   expect(response.status).toBe(httpStatus.INTERNAL_SERVER_ERROR);
  // });
});
