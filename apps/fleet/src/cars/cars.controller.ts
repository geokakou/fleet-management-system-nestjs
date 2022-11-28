import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Car, CarsService, CreateCarDTO } from '@app/common/cars';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  async getCars(): Promise<Car[]> {
    return this.carsService.getCars();
  }

  @Post()
  async createCar(@Body() car: CreateCarDTO): Promise<Car> {
    return this.carsService.createCar(car);
  }

  @Get('number/:regNumber')
  async findCar(@Param('regNumber') regNumber: string): Promise<Car> {
    return this.carsService.findCar(regNumber);
  }
}
