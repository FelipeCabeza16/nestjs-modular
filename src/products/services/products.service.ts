/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';

import { Product } from '../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dtos';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(@InjectRepository(Product) private productRepository: Repository<Product>) {}

  findAll() {
    return this.productRepository.find();
  }

  findOne(id: number) {
    const product = this.productRepository.findOne( id );
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  create(payload: CreateProductDto) {
    const newProduct = this.productRepository.create(payload);
    return this.productRepository.save(newProduct);
  }

  async update(id: number, payload: UpdateProductDto) {
    const product = this.productRepository.findOne(id);
    if
    (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    this.productRepository.merge(await product, payload);
    return this.productRepository.save(await product);
  }

  remove(id: number) {
    return this.productRepository.delete(id);
  }
}
