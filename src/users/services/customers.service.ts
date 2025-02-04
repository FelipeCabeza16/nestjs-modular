import { Injectable } from '@nestjs/common';
import { CreateCustomersDto } from '../../users/dtos/customers.dtos';

@Injectable()
export class CustomersService {
  private counterId = 1;
  private customers = [
    {
      id: 1,
      name: 'Felipe',
      lastName: 'Felipe Rojas',
      phone: '123456789',
    },
  ];

  findAll() {
    return this.customers;
  }

  findOne(id: number) {
    const customer = this.customers.find((item) => item.id === id);
    return customer;
  }

  create(payload: CreateCustomersDto) {
    this.counterId = this.counterId + 1;
    const newCustomer = {
      id: this.counterId,
      ...payload,
    };
    this.customers.push(newCustomer);
    return newCustomer;
  }

  update(id: number, payload: any) {
    const customer = this.findOne(id);
    const index = this.customers.findIndex((item) => item.id === id);
    this.customers[index] = {
      ...customer,
      ...payload,
    };
    return this.customers[index];
  }

  remove(id: number) {
    const index = this.customers.findIndex((item) => item.id === id);
    this.customers.splice(index, 1);
    return true;
  }
}
