import { Injectable } from '@nestjs/common';
import { DriversRepository } from './drivers.repository';
import { CreateDriverDTO } from './dto/drivers.dto';
import { Driver } from './schemas/drivers.schema';

@Injectable()
export class DriversService {
  constructor(private readonly driversRepository: DriversRepository) {}

  async getDrivers(): Promise<Driver[]> {
    return this.driversRepository.find({});
  }

  async createDriver(driver: CreateDriverDTO): Promise<Driver> {
    return this.driversRepository.create(driver);
  }
}
