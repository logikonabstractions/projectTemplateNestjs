
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import {configs} from "../configs";

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: configs.path,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
