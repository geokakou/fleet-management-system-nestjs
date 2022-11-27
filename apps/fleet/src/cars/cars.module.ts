import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarsController } from './cars.controller';
import { CarsRepository } from './cars.repository';
import { CarsService } from './cars.service';
import { Car, CarSchema } from './schemas/cars.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Car.name, schema: CarSchema }]),],
    providers: [CarsService, CarsRepository],
    controllers: [CarsController],
})
export class CarsModule {}
