import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DriversController } from './drivers.controller';
import {
  Driver,
  DriverSchema,
  DriversService,
  DriversRepository,
} from '@app/common/drivers';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Driver.name, schema: DriverSchema }]),
  ],
  providers: [DriversService, DriversRepository],
  controllers: [DriversController],
})
export class DriversModule {}
