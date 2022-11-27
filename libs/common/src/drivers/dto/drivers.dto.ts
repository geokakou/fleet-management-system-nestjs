import { IsString, IsNotEmpty, IsPhoneNumber } from 'class-validator';
export class CreateDriverDTO {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsPhoneNumber()
  phoneNumber: string;
}
