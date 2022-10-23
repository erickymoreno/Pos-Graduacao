import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Adicionar linha - configuração de validação de dados
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
