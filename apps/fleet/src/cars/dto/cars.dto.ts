import { IsString, IsNotEmpty } from 'class-validator';
export class CreateCarDTO {
  @IsString()
  @IsNotEmpty()
  registrationNumber: string;

  @IsString()
  @IsNotEmpty()
  model: string;
}
