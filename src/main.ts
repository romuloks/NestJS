import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { config } from 'process';
import { AppModule } from './app.module';

async function bootstrap() {
  const app =await NestFactory.create(AppModule);
  const config =  new DocumentBuilder()
  .setTitle('Blog Pessoal')
  .setDescription('Projeto do Blog Pessoal')
  .setContact('Generation Brasil', 'www.genbr.com.br', 'romuloks@gmail.com')
  .setVersion('1.0')
  .addBearerAuth()
  .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/swagger', app, document)

  
  process.env.TZ = '-03:00'
  app.useGlobalPipes(new ValidationPipe())
  app.enableCors() //acessar o codigo de todos os locais
  await app.listen(process.env.PORT || 4001);

}
bootstrap();
