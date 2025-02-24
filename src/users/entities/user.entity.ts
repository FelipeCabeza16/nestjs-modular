import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 200, type: 'varchar', unique: true })
  email: string;
  @Column({ length: 200, type: 'text' })
  password: string;
  @Column({ length: 200, type: 'varchar' })
  role: string;
}
