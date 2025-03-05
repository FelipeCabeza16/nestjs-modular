import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsPositive } from 'class-validator';

export class CreateOrderItemDto {
  @IsPositive()
  @ApiProperty()
  @IsNotEmpty()
  readonly orderId: number;
  @IsPositive()
  @ApiProperty()
  @IsNotEmpty()
  readonly productId: number;
  @IsPositive()
  @ApiProperty()
  @IsNotEmpty()
  readonly quantity: number;
}

export class UpdateOrderItemDto extends PartialType(CreateOrderItemDto) {}
