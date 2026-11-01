import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('complaints')
export class Complaint {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 150 })
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'varchar', length: 50 })
  category: string;

  @Column({ type: 'varchar', length: 150 })
  location: string;

  @Column({ type: 'varchar', length: 30, default: 'Pending' })
  status: string;

  @CreateDateColumn()
  createdAt: Date;
}
