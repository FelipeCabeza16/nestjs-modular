import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { BrandsService } from '../services/brand.service';
import { UpdateBrandsDto } from '../dtos/brands.dtos';

@Controller('brands')
export class BrandsController {
  constructor(private BrandsService: BrandsService) {}

  @Get('/:id')
  getBrandByID(@Param('id', ParseIntPipe) id: number) {
    return this.BrandsService.findOne(id);
  }
  @Get()
  getAll() {
    return this.BrandsService.findAll();
  }
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateBrandsDto,
  ) {
    return this.BrandsService.update(id, payload);
  }
}
