import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  Res,
  // ParseIntPipe,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { Response } from 'express';
import { ParseIntPipe } from '../../common/parse-int.pipe';
import { CreateProductDto, FilterProductsDto, UpdateProductDto } from '../dtos/products.dtos';

import { ProductsService } from '../services/products.service';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  @ApiOperation({ summary: 'List of products' })
  getProducts(@Query() params: FilterProductsDto) {
    return this.productsService.findAll(params);
  }

  @Get('filter')
  getProductFilter() {
    return `yo soy un filter`;
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('productId', ParseIntPipe) productId: number) {
    return this.productsService.findOne(productId);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productsService.create(payload);
  }

  @Put(':id/category/:categoryId')
  addCategoryToProduct(
    @Param('id') id: string,
    @Param('categoryId') categoryId: string,
  ) {
    return this.productsService.addCategoryByProduct(+id, +categoryId);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateProductDto) {
    return this.productsService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }

  @Delete(':id/category/:categoryId')
  deleteCategory(
    @Param('id') id: string,
    @Param('categoryId') categoryId: string,
  ) {
    return this.productsService.removeCategoryByProduct(+id, +categoryId);
  }
}
