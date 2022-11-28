import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PenaltyDocument = Penalty & Document;

@Schema()
export class Penalty {
  @Prop()
  driverId: string;

  @Prop()
  points: number;
}

export const PenaltySchema = SchemaFactory.createForClass(Penalty);
