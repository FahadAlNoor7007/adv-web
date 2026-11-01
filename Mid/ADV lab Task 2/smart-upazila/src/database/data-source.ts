import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { User } from '../users/entities/user.entity';
import { Complaint } from '../complaints/entities/complaint.entity';
import { EmergencyService } from '../emergency-services/entities/emergency-service.entity';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || '1111',
  database: process.env.DB_NAME || 'smart_upazila_db',
  entities: [User, Complaint, EmergencyService],
  migrations: ['src/database/migrations/*.ts'],
  synchronize: false,
});
