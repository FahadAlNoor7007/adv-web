import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateComplaintDto {
  @IsNotEmpty({ message: 'Title is required' })
  @IsString()
  title: string;

  @IsNotEmpty({ message: 'Description is required' })
  @IsString()
  description: string;

  @IsNotEmpty({ message: 'Category is required' })
  @IsString()
  category: string;

  @IsNotEmpty({ message: 'Location is required' })
  @IsString()
  location: string;

  @IsOptional()
  @IsString()
  status?: string;
}
