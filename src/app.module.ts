import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { postagem } from './postagem/entities/postagem.entity';
import { postagemModule } from './postagem/postagem.module';
import { Tema } from './tema/entities/tema.entity';
import { TemaModule } from './tema/tema.modulo';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'rootroot',
      database: 'db_blogpessoal',
      entities: [postagem,Tema],
      synchronize: true
    }),
    postagemModule,
   TemaModule
  ],



  controllers: [],
  providers: [],
})
export class AppModule {}
