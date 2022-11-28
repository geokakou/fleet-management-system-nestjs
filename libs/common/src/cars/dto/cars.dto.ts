import { Transform } from 'class-transformer';
import { IsString, IsNotEmpty } from 'class-validator';
export class CreateCarDTO {
  @IsString()
  @IsNotEmpty()
  @Transform((params) => params.value.toUpperCase())
  regNumber: string;

  @IsString()
  @IsNotEmpty()
  model: string;
}
