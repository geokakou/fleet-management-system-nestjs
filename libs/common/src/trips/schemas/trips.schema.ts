import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TripDocument = Trip & Document;

@Schema()
export class Trip {
  @Prop()
  driverId: string;

  @Prop()
  carRegNumber: string;

  @Prop()
  isActive: boolean;

  @Prop()
  date: Date;
}

export const TripSchema = SchemaFactory.createForClass(Trip);
