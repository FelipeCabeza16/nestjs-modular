import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Client } from 'pg';
import config from 'src/config';

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
      useFactory: (configService: ConfigType<typeof config>) => {
        const { user, host, name, password, port } = configService.postgres;
        const client = new Client({
          user,
          host,
          database: name,
          password,
          port,
        });
        client.connect();
        return client;
      },
      inject: [config.KEY],
    },
  ],
  exports: ['APP_NAME', 'PG'],
})
export class DatabaseModule {}
