import { Module } from '@nestjs/common';
import { HeartbeatsController } from './heartbeats.controller';
import { HeartbeatsService } from './heartbeats.service';
import * as Joi from 'joi';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '@app/common/database/database.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DriversService } from '@app/common/drivers/drivers.service';
import { DriversRepository } from '@app/common/drivers/drivers.repository';
import {
  Driver,
  DriverSchema,
} from '@app/common/drivers/schemas/drivers.schema';

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
    MongooseModule.forFeature([{ name: Driver.name, schema: DriverSchema }]),
  ],
  controllers: [HeartbeatsController],
  providers: [HeartbeatsService, DriversService, DriversRepository],
})
export class HeartbeatsModule {}
