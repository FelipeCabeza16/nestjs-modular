import { Product } from 'src/products/entities/product.entity';
import { User } from './user.entity';
import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Customer } from './customer.entity';
import { OrderItem } from './order-product.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;
  user: User;
  products: Product[];
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  @ManyToOne(() => Customer, (customer) => customer.orders)
  customer: Customer;
  @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
  items: OrderItem[];
}
