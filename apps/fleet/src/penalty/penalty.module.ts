import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PenaltyController } from './penalty.controller';
import {
  Penalty,
  PenaltyRepository,
  PenaltySchema,
  PenaltyService,
} from '@app/common';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Penalty.name, schema: PenaltySchema }]),
  ],
  providers: [PenaltyService, PenaltyRepository],
  controllers: [PenaltyController],
})
export class PenaltyModule {}
