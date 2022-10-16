import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type FooDocument = Foo & Document;

@Schema()
export class Foo {
  @Prop([String])
  attr: string;
}
export const FooSchema = SchemaFactory.createForClass(Foo);
