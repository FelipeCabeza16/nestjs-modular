import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.TYPEORM_HOST || 'localhost',
  port: Number(process.env.TYPEORM_PORT) || 5432,
  username: process.env.TYPEORM_USERNAME || 'postgres',
  password: process.env.TYPEORM_PASSWORD || 'postgres',
  database: process.env.TYPEORM_DATABASE || 'postgres',
  synchronize: false,
  logging: true,
  entities: ['src/**/*.entity{.ts,.js}'], // Ensure it matches entity files
  migrations: ['src/database/migrations/*{.ts,.js}'], // Ensure migration files match
  migrationsTableName: 'migrations', // Ensure migrations are tracked correctly
});
