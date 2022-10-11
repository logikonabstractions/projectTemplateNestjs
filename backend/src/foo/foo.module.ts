import { Module } from '@nestjs/common';
import { FooService } from './foo.service';
import { FooController } from './foo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Foo, FooSchema } from './entities/foo.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Foo.name, schema: FooSchema }])],
  controllers: [FooController],
  providers: [FooService],
})
export class FooModule {}
