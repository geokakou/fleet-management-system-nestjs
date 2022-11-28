import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { CarsRepository } from './cars.repository';
import { CreateCarDTO } from '../../../../libs/common/src/cars/dto/cars.dto';
import { Car } from './schemas/cars.schema';

@Injectable()
export class CarsService {
  constructor(private readonly carsRepository: CarsRepository) {}

  async getCars(): Promise<Car[]> {
    return this.carsRepository.find({});
  }

  async createCar(car: CreateCarDTO): Promise<Car> {
    const { regNumber } = car;
    const existingCar = await this.carsRepository.findOne({ regNumber });
    if (existingCar) {
      throw new BadRequestException(
        `Car with number ${regNumber} already exists`,
      );
    }
    return this.carsRepository.create(car);
  }

  async findCar(regNumber: string): Promise<Car> {
    const car = await this.carsRepository.findOne({ regNumber });
    if (!car) {
      throw new NotFoundException(`Car with number ${regNumber} not found`);
    }
    return car;
  }
}
