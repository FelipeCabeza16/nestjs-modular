import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', unique: true })
  email: string;
  @Column({ type: 'text' })
  password: string;
  @Column({ type: 'varchar' })
  role: string;
}
