import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('hello')
export class HelloController {
  @Get()
  getHello(): string {
    return 'Hello, NestJS!';
  }

  @Post()
  postHello(@Body() body: any): string {
    return `Hello, ${body.name}!`;
  }
}
