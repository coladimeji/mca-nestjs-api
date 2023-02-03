import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AfjModule } from './afj/afj.module';
import { ConnectionModule } from './connection/connection.module';

@Module({
  imports: [AfjModule, ConnectionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
