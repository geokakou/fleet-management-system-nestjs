import { RmqModule } from '@app/common/rmq/rmq.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { PenaltyPointsController } from './penalty_points.controller';
import { PenaltyPointsService } from './penalty_points.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        RABBIT_MQ_URI: Joi.string().required(),
        RABBIT_MQ_TRIPSTATUS_QUEUE: Joi.string().required(),
      }),
      envFilePath: './apps/penalty_points/.env',
    }),
    RmqModule,
  ],
  controllers: [PenaltyPointsController],
  providers: [PenaltyPointsService],
})
export class PenaltyPointsModule {}
