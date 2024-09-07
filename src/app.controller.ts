import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import axios from 'axios';

@Controller()
export class AppController {
  // eslint-disable-next-line prettier/prettier
  constructor(
    private readonly appService: AppService,
  ) {}
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('sum1')
  async sum1(@Body('numbers') numbers: number[]): Promise<number> {
    return this.appService.sum1(numbers);
  }

  @Post('sum2')
  async sum2(@Body('numbers') numbers: number[]) {
    return this.appService.sum2(numbers);
  }
}
