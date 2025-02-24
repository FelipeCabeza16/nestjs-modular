import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 200, type: 'varchar', unique: true })
  name: string;
  @Column({ length: 200, type: 'text' })
  description: string;
  @Column('float')
  price: number;
  @Column('int')
  stock: number;
  @Column('text')
  image: string;
}
