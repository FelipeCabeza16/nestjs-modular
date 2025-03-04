import {
  IsString,
  IsNumber,
  IsUrl,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'The name of the product' })
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'The description of the product' })
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty({ description: 'The price of the product' })
  readonly price: number;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty({ description: 'The stock of the product' })
  readonly stock: number;

  @IsUrl()
  @IsNotEmpty()
  @ApiProperty({ description: 'The image of the product' })
  readonly image: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty({ description: 'The brand id of the product' })
  readonly brandId: number;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
