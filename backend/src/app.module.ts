import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { configs } from '../configs';
import { MongooseModule } from '@nestjs/mongoose';
import { FooModule } from './foo/foo.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: configs.path,
    }),
    MongooseModule.forRoot(configs.mongoURL),
    FooModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
