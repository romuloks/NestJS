import {Module } from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import { postagem } from "./entities/postagem.entity";

@Module({
    imports:[TypeOrmModule.forFeature([postagem])],
    providers:[],
    controllers:[],
    exports:[TypeOrmModule]

})
export class postagemModule{ }

