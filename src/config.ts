import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
  database: {
    name: process.env.POSTGRES_DB,
    port: process.env.POSTGRES_PORT,
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
  },
  postgres: {
    name: process.env.POSTGRES_DB,
    port: parseInt(process.env.POSTGRES_PORT, 10),
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
  },
  mysql: {
    name: process.env.MYSQL_DATABASE,
    port: parseInt(process.env.MYSQL_PORT, 10),
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER || process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
  },
  apiKey: process.env.API_KEY,
  jwtSecret: process.env.JWT_SECRET,
}));
