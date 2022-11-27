import { IsString, IsNotEmpty, IsBoolean, IsDate } from 'class-validator';
import { now } from 'mongoose';
export class CreateTripDTO {
  @IsString()
  @IsNotEmpty()
  driverId: string;

  @IsString()
  @IsNotEmpty()
  carRegNumber: string;

  @IsBoolean()
  @IsNotEmpty()
  isActive = true;

  @IsDate()
  @IsNotEmpty()
  date: Date = now();
}
