import { Module } from '@nestjs/common';
import { HeartbeatsController } from './heartbeats.controller';
import { HeartbeatsService } from './heartbeats.service';
import * as Joi from 'joi';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '@app/common/database/mongo/database.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { TripsRepository } from '@app/common/trips/trips.repository';
import { Trip, TripSchema } from '@app/common/trips';
import { RmqModule } from '@app/common/rmq/rmq.module';
import { TRIP_STATUS } from './constants';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required(),
      }),
      envFilePath: './apps/heartbeats/.env',
    }),
    DatabaseModule,
    MongooseModule.forFeature([{ name: Trip.name, schema: TripSchema }]),
    RmqModule.register({
      name: TRIP_STATUS,
    }),
    ScheduleModule.forRoot(),
  ],
  controllers: [HeartbeatsController],
  providers: [HeartbeatsService, TripsRepository],
})
export class HeartbeatsModule {}
