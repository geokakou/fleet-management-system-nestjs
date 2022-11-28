import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TripsController } from './trips.controller';
import {
  Trip,
  TripSchema,
  TripsRepository,
  TripsService,
} from '@app/common/trips';
import {
  Car,
  CarSchema,
  CarsRepository,
  CarsService,
  Driver,
  DriverSchema,
  DriversRepository,
  DriversService,
} from '@app/common';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Trip.name, schema: TripSchema },
      { name: Driver.name, schema: DriverSchema },
      { name: Car.name, schema: CarSchema },
    ]),
  ],
  providers: [
    TripsService,
    TripsRepository,
    DriversService,
    DriversRepository,
    CarsService,
    CarsRepository,
  ],
  controllers: [TripsController],
})
export class TripsModule {}
