import { IsString, IsNotEmpty, IsBoolean, IsDate } from 'class-validator';
export class CreateTripDTO {
  @IsString()
  @IsNotEmpty()
  driverId: string;

  @IsString()
  @IsNotEmpty()
  carRegNumber: string;

  @IsBoolean()
  @IsNotEmpty()
  isActive;

  @IsDate()
  @IsNotEmpty()
  date: Date;
}
