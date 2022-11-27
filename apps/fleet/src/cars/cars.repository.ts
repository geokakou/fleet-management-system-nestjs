import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { EntityRepository } from 'libs/common/src';
import { Model } from 'mongoose';
import { Car, CarDocument } from './schemas/cars.schema';

@Injectable()
export class CarsRepository extends EntityRepository<CarDocument> {
  constructor(@InjectModel(Car.name) carModel: Model<CarDocument>) {
    super(carModel);
  }
}
