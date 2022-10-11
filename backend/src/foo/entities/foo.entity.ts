import { Prop, Schema } from '@nestjs/mongoose';

export type FooDocument = Foo & Document;

@Schema()
export class Foo {
  @Prop([String])
  name: string;

  @Prop([String])
  email: string;

  @Prop([String])
  password: string;
}
