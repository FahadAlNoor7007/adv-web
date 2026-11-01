import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/entities/user.entity';
import { Complaint } from './complaints/entities/complaint.entity';
import { EmergencyService } from './emergency-services/entities/emergency-service.entity';
import { UsersModule } from './users/users.module';
import { ComplaintsModule } from './complaints/complaints.module';
import { EmergencyServicesModule } from './emergency-services/emergency-services.module';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || '1111',
      database: process.env.DB_NAME || 'smart_upazila_db',
      entities: [User, Complaint, EmergencyService],
      synchronize: false, // Disallowed to auto-sync; Migrations must be used
    }),
    ObserveModule.forRoot({
      appKey: process.env.OBSERVE_APP_KEY ?? 'YOUR_APP_KEY',
      appSecret: process.env.OBSERVE_APP_SECRET ?? 'YOUR_APP_SECRET',
      serviceId: 'smart-upazila',
    }),
    UsersModule,
    ComplaintsModule,
    EmergencyServicesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
