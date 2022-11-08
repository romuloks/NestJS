import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { produtoController } from "./controller/produto.controller";
import { produto } from "./entities/produto.entity";
import { produtoService } from "./service/produto.service";


@Module({
    imports:[TypeOrmModule.forFeature([produto])],
    providers:[produtoService],
    controllers:[produtoController],
    exports:[TypeOrmModule]

})
export class produtomodule{}