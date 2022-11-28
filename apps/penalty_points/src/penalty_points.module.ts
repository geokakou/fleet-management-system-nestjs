
import { DatabaseModule, Penalty, PenaltySchema } from '@app/common';
import { PenaltyRepository } from '@app/common/penalty/penalty.repository';
import { PenaltyService } from '@app/common/penalty/penalty.service';
import { RmqModule } from '@app/common/rmq/rmq.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import * as Joi from 'joi';
import { PenaltyPointsController } from './penalty_points.controller';
import { PenaltyPointsService } from './penalty_points.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        RABBIT_MQ_URI: Joi.string().required(),
        RABBIT_MQ_TRIPSTATUS_QUEUE: Joi.string().required(),
      }),
      envFilePath: './apps/penalty_points/.env',
    }),
    MongooseModule.forFeature([
      { name: Penalty.name, schema: PenaltySchema },
    ]),
    DatabaseModule,
    RmqModule,
  ],
  controllers: [PenaltyPointsController],
  providers: [PenaltyPointsService, PenaltyService, PenaltyRepository],
})
export class PenaltyPointsModule {}
