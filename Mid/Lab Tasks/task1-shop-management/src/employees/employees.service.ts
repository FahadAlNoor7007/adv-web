import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    const employee = this.employeeRepository.create({
      ...createEmployeeDto,
      age: Number(createEmployeeDto.age),
      yearsOfWorking: Number(createEmployeeDto.yearsOfWorking),
    });
    return await this.employeeRepository.save(employee);
  }

  async findAll(): Promise<Employee[]> {
    return await this.employeeRepository.find();
  }

  async findOne(id: number): Promise<Employee> {
    const employee = await this.employeeRepository.findOneBy({ id });
    if (!employee) {
      throw new NotFoundException(`Employee with ID ${id} not found`);
    }
    return employee;
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto): Promise<Employee> {
    const employee = await this.findOne(id);

    if (updateEmployeeDto.name !== undefined) {
      employee.name = updateEmployeeDto.name;
    }
    if (updateEmployeeDto.email !== undefined) {
      employee.email = updateEmployeeDto.email;
    }
    if (updateEmployeeDto.phone !== undefined) {
      employee.phone = updateEmployeeDto.phone;
    }
    if (updateEmployeeDto.password !== undefined) {
      employee.password = updateEmployeeDto.password;
    }
    if (updateEmployeeDto.age !== undefined) {
      employee.age = Number(updateEmployeeDto.age);
    }
    if (updateEmployeeDto.yearsOfWorking !== undefined) {
      employee.yearsOfWorking = Number(updateEmployeeDto.yearsOfWorking);
    }

    return await this.employeeRepository.save(employee);
  }

  async remove(id: number): Promise<{ message: string; deletedEmployee: Employee }> {
    const employee = await this.findOne(id);
    const deletedEmployee = { ...employee };
    await this.employeeRepository.delete(id);
    return {
      message: `Employee with ID ${id} deleted successfully`,
      deletedEmployee,
    };
  }
}
