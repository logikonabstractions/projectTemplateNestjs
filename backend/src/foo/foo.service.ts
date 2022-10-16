import { Injectable } from '@nestjs/common';
import { CreateFooDto } from './dto/create-foo.dto';
import { UpdateFooDto } from './dto/update-foo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Foo, FooDocument } from './entities/foo.entity';
import { Model } from 'mongoose';

@Injectable()
export class FooService {
  constructor(@InjectModel(Foo.name) private fooModel: Model<FooDocument>) {}

  async create(createFooDto: CreateFooDto): Promise<Foo> {
    return await new this.fooModel(createFooDto).save();
  }

  async findAll() {
    return await this.fooModel.find();
  }

  async findOne(id: string) {
    return await this.fooModel.find({ _id: id });
  }

  async update(id: string, updateFooDto: UpdateFooDto) {
    return this.fooModel.findByIdAndUpdate(id, { ...updateFooDto });
  }

  async remove(id: string) {
    return await this.fooModel.findByIdAndRemove(id);
  }
}
