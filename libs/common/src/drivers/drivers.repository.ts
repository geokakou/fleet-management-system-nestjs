import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { EntityRepository } from 'libs/common/src';
import { Model } from 'mongoose';
import { Driver, DriverDocument } from './schemas/drivers.schema';

@Injectable()
export class DriversRepository extends EntityRepository<DriverDocument> {
  constructor(@InjectModel(Driver.name) driverModel: Model<DriverDocument>) {
    super(driverModel);
  }
}
