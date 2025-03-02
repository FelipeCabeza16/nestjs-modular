import { Injectable } from '@nestjs/common';
import { CreateBrandsDto } from '../dtos/brands.dtos';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Brand } from 'src/users/entities/brand.entity';

@Injectable()
export class BrandsService {
  constructor(
    @InjectRepository(Brand) private brandRepository: Repository<Brand>,
  ) {}
  findAll() {
    return this.brandRepository.find();
  }

  async findOne(id: number) {
    const brand = await this.brandRepository.findOne(id);
    return brand;
  }

  create(payload: CreateBrandsDto) {
    const newBrand = this.brandRepository.create(payload);
    return this.brandRepository.save(newBrand);
  }

  async update(id: number, payload: any) {
    const brand = await this.brandRepository.findOne(id);
    if (!brand) {
      return null;
    }
    this.brandRepository.merge(brand, payload);
    return this.brandRepository.save(brand);
  }

  remove(id: number) {
    return this.brandRepository.delete(id);
  }
}
