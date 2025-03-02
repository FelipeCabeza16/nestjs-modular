import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { BrandsService } from '../services/brand.service';
import { CreateBrandsDto, UpdateBrandsDto } from '../dtos/brands.dtos';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('brands')
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
  @Post()
  create(@Body() payload: CreateBrandsDto) {
    return this.BrandsService.create(payload);
  }
}
