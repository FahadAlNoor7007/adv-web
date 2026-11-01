import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEmergencyServiceDto {
  @IsNotEmpty({ message: 'Service name is required' })
  @IsString()
  serviceName: string;

  @IsNotEmpty({ message: 'Category is required' })
  @IsString()
  category: string;

  @IsNotEmpty({ message: 'Contact number is required' })
  @IsString()
  contactNumber: string;

  @IsNotEmpty({ message: 'Address is required' })
  @IsString()
  address: string;
}
