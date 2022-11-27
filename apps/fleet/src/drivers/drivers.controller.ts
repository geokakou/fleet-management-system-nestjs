import { Body, Controller, Get, Post } from '@nestjs/common';
import { DriversService, CreateDriverDTO, Driver } from '@app/common/drivers';

@Controller('drivers')
export class DriversController {
  constructor(private readonly driversService: DriversService) {}

  @Get()
  async getDrivers(): Promise<Driver[]> {
    return this.driversService.getDrivers();
  }

  @Post()
  async createDriver(@Body() driver: CreateDriverDTO): Promise<Driver> {
    return this.driversService.createDriver(driver);
  }
}
