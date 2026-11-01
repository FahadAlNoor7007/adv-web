import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmergencyService } from './entities/emergency-service.entity';
import { EmergencyServicesService } from './emergency-services.service';
import { EmergencyServicesController } from './emergency-services.controller';

@Module({
  imports: [TypeOrmModule.forFeature([EmergencyService])],
  controllers: [EmergencyServicesController],
  providers: [EmergencyServicesService],
  exports: [EmergencyServicesService],
})
export class EmergencyServicesModule {}
