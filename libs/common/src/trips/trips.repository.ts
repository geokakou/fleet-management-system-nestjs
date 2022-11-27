import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { EntityRepository } from '../database/mongo/entity.repository';
import { Model } from 'mongoose';
import { Trip, TripDocument } from './schemas/trips.schema';

@Injectable()
export class TripsRepository extends EntityRepository<TripDocument> {
  constructor(@InjectModel(Trip.name) tripModel: Model<TripDocument>) {
    super(tripModel);
  }
}
