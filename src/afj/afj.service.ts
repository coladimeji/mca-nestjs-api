import { Injectable } from '@nestjs/common';
import { CreateAfjDto } from './dto/createafj.dto';
@Injectable()
export class AfjService {
  getHello(): string {
    return 'Hello World from VeriDiD Inc!';
  }

  getTest(): string {
    return 'Test from VeriDiD Inc!';
  }

  create(createDto: CreateAfjDto): string {
    console.log('Service call DTO:', createDto);
    return 'Hello!';
  }
}
