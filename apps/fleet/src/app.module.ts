import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as Joi from 'joi';
import { CarsService } from './cars/cars.service';
import { CarsController } from './cars/cars.controller';
import { CarsModule } from './cars/cars.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from 'libs/common/src';
import { CarsRepository } from './cars/cars.repository';

@Module({
  imports: [
    CarsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required(),
      }),
      envFilePath: './apps/orders/.env',
    }),
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
