import { Injectable } from '@nestjs/common';
import { CreateBrandsDto } from '../dtos/brands.dtos';

@Injectable()
export class BrandsService {
  private counterId = 1;
  private brands = [
    {
      id: 1,
      name: 'Brand 1',
      description: 'Description brand 1',
    },
  ];

  findAll() {
    return this.brands;
  }

  findOne(id: number) {
    const brand = this.brands.find((item) => item.id === id);
    return brand;
  }

  create(payload: CreateBrandsDto) {
    this.counterId = this.counterId + 1;
    const newBrand = {
      id: this.counterId,
      ...payload,
    };
    this.brands.push(newBrand);
    return newBrand;
  }

  update(id: number, payload: any) {
    const brand = this.findOne(id);
    const index = this.brands.findIndex((item) => item.id === id);
    this.brands[index] = {
      ...brand,
      ...payload,
    };
    return this.brands[index];
  }

  remove(id: number) {
    const index = this.brands.findIndex((item) => item.id === id);
    this.brands.splice(index, 1);
    return true;
  }
}
