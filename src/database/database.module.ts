import { Module, Global } from '@nestjs/common';
import { Client } from 'pg';

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5432,
});

client.connect();
// client.query('SELECT * FROM tasks', (err, res) => {
//   console.log(err, res);
//   client.end();
// });

@Global()
@Module({
  providers: [
    {
      provide: 'APP_NAME',
      useValue: 'NestJS App',
    },
    {
      provide: 'PG',
      useValue: client,
    },
  ],
  exports: ['APP_NAME', 'PG'],
})
export class DatabaseModule {}
