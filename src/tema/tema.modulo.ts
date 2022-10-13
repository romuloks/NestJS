import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TemaService } from "src/postagem/service/tema.entity";
import { TemaContoller } from "./controller/tema.controller";
import { Tema } from "./entities/tema.entity";


@Module({
    imports: [TypeOrmModule.forFeature([Tema])],
    providers: [TemaService],
    controllers: [TemaContoller],
    exports:[TypeOrmModule]
})
export class TemaModule {}