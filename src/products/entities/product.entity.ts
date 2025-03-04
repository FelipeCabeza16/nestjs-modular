import { Brand } from 'src/users/entities/brand.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinTable,
} from 'typeorm';

import { Category } from './category.entity';
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
  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
  @ManyToOne(() => Brand, (brand) => brand.products)
  brand: Brand;
  @ManyToMany(() => Category, (category) => category.products)
  @JoinTable()
  categories: Category[];
}
