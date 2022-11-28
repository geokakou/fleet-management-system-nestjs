import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarsController } from './cars.controller';
import { CarsRepository, Car, CarSchema, CarsService } from '@app/common/cars';

@Module({
  imports: [MongooseModule.forFeature([{ name: Car.name, schema: CarSchema }])],
  providers: [CarsService, CarsRepository],
  controllers: [CarsController],
})
export class CarsModule {}
