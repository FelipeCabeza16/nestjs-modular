import { Brand } from 'src/users/entities/brand.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinTable,
  JoinColumn,
} from 'typeorm';

import { Category } from './category.entity';
@Entity({ name: 'products' })
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
  @Column('timestamp', {
    default: () => 'CURRENT_TIMESTAMP',
    name: 'created_at',
  })
  createdAt: Date;
  @Column('timestamp', {
    default: () => 'CURRENT_TIMESTAMP',
    name: 'updated_at',
  })
  updatedAt: Date;
  @ManyToOne(() => Brand, (brand) => brand.products)
  @JoinColumn({ name: 'brand_id' })
  brand: Brand;
  @ManyToMany(() => Category, (category) => category.products)
  @JoinTable({
    name: 'products_categories',
    joinColumn: { name: 'product_id' },
    inverseJoinColumn: { name: 'category_id' },
  })
  categories: Category[];
}
