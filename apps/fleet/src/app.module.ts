import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as Joi from 'joi';
import { CarsModule } from './cars/cars.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from 'libs/common/src';
import { DriversModule } from './drivers/drivers.module';

@Module({
  imports: [
    CarsModule,
    DriversModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required(),
      }),
      envFilePath: './apps/fleet/.env',
    }),
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
