import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(@Inject('APP_NAME') private appName: string) {}
  getHello(): string {
    return `Hello World! This is ${this.appName}`;
  }
}
