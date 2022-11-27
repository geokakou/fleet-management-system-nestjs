import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findDriver(driverId: string): Promise<Driver> {
    const driver = await this.driversRepository.findOne({ driverId });
    if (!driver) {
      throw new NotFoundException(`Driver with ID ${driverId} not found`);
    }
    return driver;
  }
}
