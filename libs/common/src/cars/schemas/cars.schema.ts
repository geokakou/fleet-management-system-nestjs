import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CarDocument = Car & Document;

@Schema()
export class Car {
  @Prop()
  regNumber: string;

  @Prop()
  model: string;
}

export const CarSchema = SchemaFactory.createForClass(Car);
