import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsService } from './services/products.service';
import { BrandsModule } from 'src/brands/brands.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [BrandsModule],
  controllers: [ProductsController, CategoriesController],
  providers: [ProductsService],
})
export class ProductsModule {}
