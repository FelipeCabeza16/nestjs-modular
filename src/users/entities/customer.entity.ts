import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 200, type: 'varchar' })
  name: string;
  @Column({ length: 200, type: 'varchar' })
  lastName: string;
  @Column({ length: 200, type: 'varchar', unique: true })
  phone: string;
}
