import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'The name of the category' })
  readonly name: string;
}

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
