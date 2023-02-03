import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateAfjDto {
  @ApiProperty({ default: 'Christopher' })
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({ default: '8000' })
  @IsNumber()
  @IsNotEmpty()
  readonly port: string;

  @ApiProperty({ default: '192.168.2.41:3000' })
  @IsString()
  readonly endpoint: string;
}
