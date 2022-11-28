import { Document, FilterQuery, Model, UpdateQuery } from 'mongoose';

export abstract class EntityRepository<T extends Document> {
  constructor(protected readonly entityModel: Model<T>) {}

  async findOne(entityFilterQuery: FilterQuery<T>): Promise<T | null> {
    return this.entityModel.findOne(entityFilterQuery).exec();
  }

  async find(entityFilterQuery: FilterQuery<T>): Promise<T[]> {
    return this.entityModel.find(entityFilterQuery);
  }

  async create(entityData: unknown): Promise<T> {
    const newEntity = new this.entityModel(entityData);
    return newEntity.save();
  }

  async findOneAndUpdate(
    entityFilterQuery: FilterQuery<T>,
    updateData: UpdateQuery<Partial<T>>,
  ): Promise<T> {
    return this.entityModel.findOneAndUpdate(entityFilterQuery, updateData, {
      new: true,
    });
  }

  async upsert(filterQuery: FilterQuery<T>, document: Partial<T>) {
    return this.entityModel.findOneAndUpdate(filterQuery, document, {
      lean: true,
      upsert: true,
      new: true,
    });
  }
}
