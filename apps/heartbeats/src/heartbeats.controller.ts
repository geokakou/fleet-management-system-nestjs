import { Driver, DriversService } from '@app/common/drivers';
import { Controller, Get } from '@nestjs/common';
import { HeartbeatsService } from './heartbeats.service';

@Controller()
export class HeartbeatsController {
  constructor(
    private readonly heartbeatsService: HeartbeatsService,
    private readonly driversService: DriversService,
  ) {}

  @Get()
  getHello(): string {
    return this.heartbeatsService.getHello();
  }

  @Get('drivers')
  async getDrivers(): Promise<Driver[]> {
    return this.driversService.getDrivers();
  }
}
