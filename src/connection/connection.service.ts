import { Injectable } from '@nestjs/common';

@Injectable()
export class ConnectionService {
  getHello(): string {
    return 'Hello World from VeriDiD Connection service!';
  }
}
