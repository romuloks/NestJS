import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { categoriaModelu } from './categoria/categoria.module';
import { categoria } from './categoria/entities/categoria.entity';
import { produto } from './produto/entities/produto.entity';
import { produtomodule } from './produto/produto.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'rootroot',
      database: 'db_mestre_dos_jogos',
      entities: [categoria,produto],
      synchronize: true
    }),
categoriaModelu,
produtomodule
],
  controllers: [],
  providers: [],
})
export class AppModule {}
