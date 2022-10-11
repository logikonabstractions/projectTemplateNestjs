import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MongooseModule } from '@nestjs/mongoose';
import { configs } from '../configs';

async function bootstrap() {
  console.error(configs.mongoURL);
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.error(`listening on: localhost:3000`);
}
bootstrap();
