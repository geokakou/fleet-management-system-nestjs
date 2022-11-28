import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { EntityRepository } from '../database/mongo/entity.repository';
import { Model } from 'mongoose';
import { Penalty, PenaltyDocument } from './schemas/penalty.schema';

@Injectable()
export class PenaltyRepository extends EntityRepository<PenaltyDocument> {
  constructor(@InjectModel(Penalty.name) penaltyModel: Model<PenaltyDocument>) {
    super(penaltyModel);
  }
}
