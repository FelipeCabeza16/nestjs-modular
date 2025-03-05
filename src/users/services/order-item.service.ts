import { Injectable } from '@nestjs/common';

import {
  CreateOrderItemDto,
  UpdateOrderItemDto,
} from '../dtos/order-item.dtos';
import { OrderItem } from '../entities/order-product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from 'src/products/entities/product.entity';
import { Order } from '../entities/order.entity';
@Injectable()
export class OrderItemService {
  constructor(
    @InjectRepository(Order) private orderRepo: Repository<Order>,
    @InjectRepository(OrderItem) private itemRsepo: Repository<OrderItem>,
    @InjectRepository(Product) private productRepo: Repository<Product>,
  ) {}
  async create(data: CreateOrderItemDto) {
    const order = await this.orderRepo.findOne(data.orderId);
    const product = await this.productRepo.findOne(data.productId);
    const item = new OrderItem();
    item.order = order;
    item.product = product;
    item.quantity = data.quantity;
    return this.itemRsepo.save(item);
  }

  findAll() {
    return this.itemRsepo.find();
  }

  async findOne(id: number) {
    const item = await this.itemRsepo.findOne(id);
    if (!item) {
      throw new Error('Item not found');
    }
    return item;
  }

  async update(id: number, changes: UpdateOrderItemDto) {
    const item = await this.itemRsepo.findOne(id);
    if (changes.productId) {
      const product = await this.productRepo.findOne(changes.productId);
      item.product = product;
    }
    if (changes.quantity) {
      item.quantity = changes.quantity;
    }
    return this.itemRsepo.save(item);
  }

  async remove(id: number) {
    return this.itemRsepo.delete(id);
  }
}
