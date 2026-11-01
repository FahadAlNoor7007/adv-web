import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Full name is required' })
  @IsString()
  fullName: string;

  @IsNotEmpty({ message: 'Phone number is required' })
  @IsString()
  phoneNumber: string;

  @IsNotEmpty({ message: 'NID is required' })
  @IsString()
  nid: string;

  @IsNotEmpty({ message: 'Upazila is required' })
  @IsString()
  upazila: string;
}
