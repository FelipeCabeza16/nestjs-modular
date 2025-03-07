import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Client } from 'pg';
import { ConfigService } from '@nestjs/config';

import { User } from '../entities/user.entity';
import * as bcrypt from 'bcrypt';
import { ProductsService } from './../../products/services/products.service';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dtos';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomersService } from './customers.service';


@Injectable()
export class UsersService {
  constructor(
    private productsService: ProductsService,
    private configService: ConfigService,
    private customerService: CustomersService,
    @Inject('PG') private client: Client,
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  findAll(p0: { relations: string[] }) {
    console.log(this.configService.get('API_KEY'));
    return this.usersRepository.find();
  }

  async findOne(id: number) {
    const user = this.usersRepository.findOne(id);
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }

  findByEmail(email: string) {
    return this.usersRepository.findOne({ where: { email } });
  }

  async create(data: CreateUserDto) {
    const newUser = this.usersRepository.create(data);
    const hashPassword = await bcrypt.hash(newUser.password, 10);
    newUser.password = hashPassword;
    if (data.customerId) {
      const customer = await this.customerService.findOne(
        Number(data.customerId),
      );
      newUser.customer = customer;
    }
    return this.usersRepository.save(newUser);
  }

  async update(id: number, changes: UpdateUserDto) {
    const user = await this.findOne(id);
    this.usersRepository.merge(user, changes);
    return this.usersRepository.save(user);
  }

  remove(id: number) {
    return this.usersRepository.delete(id);
  }

  async getOrderByUser(id: number) {
    const user = this.findOne(id);
    return {
      date: new Date(),
      user,
      products: await this.productsService.findAll(),
    };
  }

  getTasks() {
    return new Promise((resolve, reject) => {
      this.client.query('SELECT * FROM tasks', (err, res) => {
        if (err) {
          return reject(err);
        }
        resolve(res.rows);
      });
    });
  }
}
