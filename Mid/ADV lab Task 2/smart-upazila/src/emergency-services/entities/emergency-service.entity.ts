import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('emergency_services')
export class EmergencyService {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 120 })
  serviceName: string;

  @Column({ type: 'varchar', length: 50 })
  category: string;

  @Column({ type: 'varchar', length: 20 })
  contactNumber: string;

  @Column({ type: 'varchar', length: 200 })
  address: string;
}
