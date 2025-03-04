import {
  IsString,
  IsNotEmpty,
  IsEmail,
  Length,
  IsOptional,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @IsEmail()
  @ApiProperty({ description: 'Email of the user' })
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @Length(6)
  @ApiProperty({ description: 'Password of the user' })
  readonly password: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'Name of the user' })
  readonly role: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'Customer Id of the user' })
  readonly customerId: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
