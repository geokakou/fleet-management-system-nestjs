import { Injectable } from '@nestjs/common';

@Injectable()
export class HeartbeatsService {
  getHello(): string {
    return 'Hello World!';
  }
}
