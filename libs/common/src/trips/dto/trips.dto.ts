import { IsString, IsNotEmpty, IsBoolean } from 'class-validator';
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
}
