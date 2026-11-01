import { Controller, Post, Get, Body } from '@nestjs/common';
import { EmergencyServicesService } from './emergency-services.service';
import { CreateEmergencyServiceDto } from './dto/create-emergency-service.dto';

@Controller('emergency-services')
export class EmergencyServicesController {
  constructor(private readonly emergencyServicesService: EmergencyServicesService) {}

  @Post()
  create(@Body() createEmergencyServiceDto: CreateEmergencyServiceDto) {
    return this.emergencyServicesService.create(createEmergencyServiceDto);
  }

  @Get()
  findAll() {
    return this.emergencyServicesService.findAll();
  }
}
