import { Body, Controller, Get, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDTO } from './dto/cars.dto';
import { Car } from './schemas/cars.schema';

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
}
