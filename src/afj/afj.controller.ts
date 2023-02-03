/* eslint-disable prettier/prettier */
import { Controller, Get , Post , Body } from '@nestjs/common';
import { AfjService } from './afj.service';
import { CreateAfjDto } from './dto/createafj.dto';

@Controller('afj')
export class AfjController {
  constructor(private readonly afjService: AfjService) {}

  @Get()
  getHello(): string {
    return this.afjService.getHello();
  }

  @Get("test")
  getTest(): string {
    return this.afjService.getTest();
  }

  @Post("create")
  create(@Body() createAfjDto: CreateAfjDto): string {
    console.log("DTO is: ", createAfjDto);
    return this.afjService.create(createAfjDto);
  }
}
