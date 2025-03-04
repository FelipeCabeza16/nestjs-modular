import { Injectable } from '@nestjs/common';
import { CreateCustomersDto } from '../../users/dtos/customers.dtos';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from '../entities/customer.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  async findAll() {
    return await this.customerRepository.find();
  }

  findOne(id: number) {
    return this.customerRepository.findOne(id);
  }

  create(payload: CreateCustomersDto) {
    const newCustomer = this.customerRepository.create(payload);
    return this.customerRepository.save(newCustomer);
  }

  async update(id: number, payload: any) {
    const customer = this.customerRepository.findOne(id);
    this.customerRepository.merge(await customer, payload);
    return this.customerRepository.save(await customer);
  }

  remove(id: number) {
    return this.customerRepository.delete(id);
  }
}
