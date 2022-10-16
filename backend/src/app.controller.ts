import { configs } from '../configs';
import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { readFileSync } from 'fs';
import { join } from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // @Get()
  // hello(): string {
  //   return "hello worldzzzz"
  // }

  // private path = configs.path
  // @Get()
  // index(@Res() response: Response) {
  //   // response.type('text/html').send(readFileSync(this.path).toString());
  //   console.log(configs.path + '/index.html')
  //   // response.type('text/html').send(readFileSync(configs.path).toString() + '/index.html');
  //   response.type('text/html').send(readFileSync(configs.path).toString() + '/index.html');
  // }
}
