import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    @Inject('APP_NAME') private appName: string,
    @Inject('TASKS') private tasks: any[],
    private config: ConfigService,
  ) {}
  getHello(): string {
    const apiKey = this.config.get<string>('API_KEY');
    const name = this.config.get('DATABASE_NAME');
    return `Hello World! ${this.appName} ${this.tasks.length} ${apiKey} ${name}`;
  }
}
