import { Body, Controller, Post } from '@nestjs/common';
import { OrderItemService } from '../services/order-item.service';
import { CreateOrderItemDto } from '../dtos/order-item.dtos';

@Controller('order-item')
export class OrderItemController {
  constructor(private readonly orderItemService: OrderItemService) {}
  @Post()
  create(@Body() payload: CreateOrderItemDto) {
    return this.orderItemService.create(payload);
  }
}
