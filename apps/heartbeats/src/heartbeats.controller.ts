import { Controller, Get } from '@nestjs/common';
import { HeartbeatsService } from './heartbeats.service';

@Controller()
export class HeartbeatsController {
  constructor(private readonly heartbeatsService: HeartbeatsService) {}

  @Get()
  getHello(): string {
    return this.heartbeatsService.getHello();
  }
}
