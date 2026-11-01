import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Complaint } from './entities/complaint.entity';
import { CreateComplaintDto } from './dto/create-complaint.dto';

@Injectable()
export class ComplaintsService {
  constructor(
    @InjectRepository(Complaint)
    private readonly complaintRepository: Repository<Complaint>,
  ) {}

  async create(createComplaintDto: CreateComplaintDto): Promise<Complaint> {
    const complaint = this.complaintRepository.create(createComplaintDto);
    return await this.complaintRepository.save(complaint);
  }

  async findAll(): Promise<Complaint[]> {
    return await this.complaintRepository.find();
  }
}
