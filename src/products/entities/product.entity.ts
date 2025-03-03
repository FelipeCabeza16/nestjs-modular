import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', unique: true })
  name: string;
  @Column({ type: 'text' })
  description: string;
  @Column('float')
  price: number;
  @Column('int')
  stock: number;
  @Column('text')
  image: string;
  @Column('boolean', { default: true })
  status: boolean;
  @Column('timestamptz', { default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
  @Column('timestamptz', { default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
