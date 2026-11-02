import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  Max,
  Min,
  Length,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 255, { message: 'fullName must be at least 3 characters long' })
  fullName: string;

  @IsEmail({}, { message: 'Invalid email address' })
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    {
      message:
        'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character',
    },
  )
  password: string;

  @Type(() => Number)
  @IsInt()
  @Min(18, { message: 'Age must be at least 18' })
  @Max(60, { message: 'Age must not be greater than 60' })
  age: number;

  @IsString()
  @IsNotEmpty()
  @Matches(/^01[0-9]{9}$/, {
    message: 'Phone must be exactly 11 digits beginning with 01',
  })
  phone: string;

  @IsString()
  @Matches(/^(student|teacher)$/, {
    message: 'accountType must be either "student" or "teacher"',
  })
  accountType: string;

  @IsOptional()
  @IsString()
  @Length(10, 255, {
    message: 'Address must be minimum 10 characters if supplied',
  })
  address?: string;
}
