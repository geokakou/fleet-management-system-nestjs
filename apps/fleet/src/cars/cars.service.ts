import { Injectable } from '@nestjs/common';
import { CarsRepository } from './cars.repository';
import { CreateCarDTO } from './dto/cars.dto';
import { Car } from './schemas/cars.schema';

@Injectable()
export class CarsService {
  constructor(private readonly carsRepository: CarsRepository) {}

  async getCars(): Promise<Car[]> {
    return this.carsRepository.find({});
  }

  async createCar(car: CreateCarDTO): Promise<Car> {
    return this.carsRepository.create(car);
  }
}
