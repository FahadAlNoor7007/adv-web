import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  registerUser(createUserDto: CreateUserDto) {
    return {
      message: 'User registered successfully',
      fullName: createUserDto.fullName,
      email: createUserDto.email,
      age: createUserDto.age,
      accountType: createUserDto.accountType,
    };
  }
}
