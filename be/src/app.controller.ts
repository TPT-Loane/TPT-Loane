import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return `Hello, you're probably looking for <a href="/graphql">graphql playground</a>`;
  }
}
