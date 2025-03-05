/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';

import { Product } from '../entities/product.entity';
import { CreateProductDto, FilterProductsDto, UpdateProductDto } from '../dtos/products.dtos';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Category } from '../entities/category.entity';
import { Brand } from 'src/users/entities/brand.entity';
@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
    @InjectRepository(Brand) private brandRepository: Repository<Brand>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  findAll(params?: FilterProductsDto) {
    if (params) {
      const { limit, offset } = params;
      return this.productRepository.find({
        relations: ['brand', 'categories'],
        take: limit,
        skip: offset,
      });
    }
    return this.productRepository.find({
      relations: ['brand', 'categories'],
    });
  }

  async findOne(id: number) {
    const product = await this.productRepository.findOne({
      where: { id },
      relations: ['brand', 'categories'],
    });
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  async create(payload: CreateProductDto) {
    const newProduct = await this.productRepository.create(payload);
    if (payload.brandId) {
      const brand = await this.brandRepository.findOne(payload.brandId);
      newProduct.brand = brand;
    }
    if (payload.categoriesIds) {
      newProduct.categories = await this.categoryRepository.findByIds(
        payload.categoriesIds,
      );
    }

    return this.productRepository.save(newProduct);
  }

  async update(id: number, payload: UpdateProductDto) {
    const product = await this.productRepository.findOne(id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    if (payload.brandId) {
      const brand = await this.brandRepository.findOne(payload.brandId);
      product.brand = brand;
    }
    if (payload.categoriesIds) {
      product.categories = await this.categoryRepository.findByIds(
        payload.categoriesIds,
      );
    }
    this.productRepository.merge(await product, payload);
    return this.productRepository.save(await product);
  }

  async addCategoryByProduct(productId: number, categoryId: number) {
    const product = await this.productRepository.findOne(productId, {
      relations: ['categories'],
    });
    const category = await this.categoryRepository.findOne(categoryId);
    product.categories.push(category);
    return this.productRepository.save(product);
  }

  async removeCategoryByProduct(productId: number, categoryId: number) {
    const product = await this.productRepository.findOne(productId, {
      relations: ['categories'],
    });
    product.categories = product.categories.filter(
      (item) => item.id !== categoryId,
    );
    return this.productRepository.save(product);
  }

  remove(id: number) {
    return this.productRepository.delete(id);
  }
}
