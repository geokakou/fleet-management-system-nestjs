import { IsString, IsNotEmpty } from 'class-validator';
export class DeactivateTripDTO {
  @IsString()
  @IsNotEmpty()
  driverId: string;

  @IsString()
  @IsNotEmpty()
  carRegNumber: string;
}
