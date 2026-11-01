import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmergencyService } from './entities/emergency-service.entity';
import { CreateEmergencyServiceDto } from './dto/create-emergency-service.dto';

@Injectable()
export class EmergencyServicesService {
  constructor(
    @InjectRepository(EmergencyService)
    private readonly emergencyServiceRepository: Repository<EmergencyService>,
  ) {}

  async create(createEmergencyServiceDto: CreateEmergencyServiceDto): Promise<EmergencyService> {
    const service = this.emergencyServiceRepository.create(createEmergencyServiceDto);
    return await this.emergencyServiceRepository.save(service);
  }

  async findAll(): Promise<EmergencyService[]> {
    return await this.emergencyServiceRepository.find();
  }
}
