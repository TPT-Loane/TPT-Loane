import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.SERVER_PORT);
  console.log(
    '\u001b[1;32mHosting app on: http://localhost:' + process.env.SERVER_PORT,
  );
}
bootstrap();
