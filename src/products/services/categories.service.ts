import { Injectable, NotFoundException } from '@nestjs/common';

import { Category } from '../entities/category.entity';
import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/category.dtos';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}
  findAll() {
    return this.categoryRepository.find({
      relations: ['products'],
    });
  }

  async findOne(id: number) {
    const category = await this.categoryRepository.findOne({
      where: { id },
      relations: ['products'],
    });
    if (!category) {
      throw new NotFoundException(`Category #${id} not found`);
    }
    return category;
  }

  create(data: CreateCategoryDto) {
    const newCategory = this.categoryRepository.create(data);
    return this.categoryRepository.save(newCategory);
  }

  async update(id: number, changes: UpdateCategoryDto) {
    const category = this.categoryRepository.findOne(id);
    if (!category) {
      throw new NotFoundException(`Category #${id} not found`);
    }
    this.categoryRepository.merge(await category, changes);
    return this.categoryRepository.save(await category);
  }

  remove(id: number) {
    return this.categoryRepository.delete(id);
  }
}
