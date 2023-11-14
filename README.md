### Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Database Setup with Prisma](#database-setup-with-prisma)
4. [Development](#development)
5. [Testing](#testing)
6. [API Documentation](#api-documentation)
7. [Important Notes](#important-notes)

---

### Prerequisites

Before running the project, make sure you have the following prerequisites installed:

- Node.js
- npm (Node Package Manager)
- PostgreSQL database

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. Navigate to the project directory:

   ```bash
   cd seu-repositorio
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Database Setup with Prisma

1. Ensure that you have a PostgreSQL database available.

2. Create a `.env` file in the project root with the following content, replacing the values with your database details:

   ```env
   DB_HOST=your_database_host
   DB_PORT=your_database_port
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_NAME=your_database_name
   ```

3. Run the following commands to deploy Prisma migrations and seed the database:

   ```bash
   # Run Prisma migrations for tests
   npm run test:migration:run

   # Generate Prisma migration files for tests
   npm run test:migration:generate

   # Seed the database for tests
   npm run test:seed
   ```

### Development

- **Run Migrations for Development:**

  ```bash
  npm run dev:migration:run
  ```

- **Generate Prisma Migration Files for Development:**

  ```bash
  npm run dev:migration:generate
  ```

- **Seed the Database for Development:**

  ```bash
  npm run dev:seed
  ```

- **Start the Development Server:**

  ```bash
  npm run dev
  ```

### Testing

- **Run Migrations for Tests:**

  ```bash
  npm run test:migration:run
  ```

- **Generate Prisma Migration Files for Tests:**

  ```bash
  npm run test:migration:generate
  ```

- **Seed the Database for Tests:**

  ```bash
  npm run test:seed
  ```

- **Run Tests:**

  ```bash
  npm test
  ```

### API Documentation

- Swagger API documentation is available at [http://localhost:3000/api-docs](http://localhost:3000/api-docs) when the server is running.

### Important Notes

- Ensure that your PostgreSQL database is running and accessible.
- Make sure to run Prisma migrations and seed the database before running the application in development or test modes.

Feel free to customize the Prisma scripts and configurations based on your specific needs.

---

_Note: Replace "your_database_host," "your_database_port," etc., with your actual database details._
