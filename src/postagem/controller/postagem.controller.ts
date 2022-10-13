import{Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put} from "@nestjs/common"
import { postagem } from "../entities/postagem.entity";
import { PostagemService } from "../service/postagem.service";
@Controller("/postagens")
export class postagemController{
    constructor(private readonly PostagemService:PostagemService) {}
@Get()
@HttpCode(HttpStatus.OK)
findAll(): Promise<postagem[]> {
    return this.PostagemService.findAll();
}
@Get('/:id')
@HttpCode(HttpStatus.OK)
        findById(@Param('id', ParseIntPipe)id: number): Promise<postagem>{
            return this.PostagemService.findById(id)
        }
@Get('/titulo/:titulo')
@HttpCode(HttpStatus.OK)
findByTitulo(@Param('titulo')titulo:string): Promise<postagem[]>{
    return this.PostagemService.findByTitulo(titulo)
}
@Post()
@HttpCode(HttpStatus.CREATED)
 create(@Body() postagem:postagem):Promise<postagem>{
    return this.PostagemService.create(postagem)
 }
@Put()
@HttpCode(HttpStatus.OK)
update(@Body()postagem: postagem): Promise<postagem>{
    return this.PostagemService.update(postagem)
}
@Delete('/:id')
@HttpCode(HttpStatus.NO_CONTENT)
delete(@Param('id', ParseIntPipe) id: number){
    return this.PostagemService.delete(id)
}
@Get('/Texto/:texto')
@HttpCode(HttpStatus.OK)
findByTexto(@Param('texto') texto:string): Promise<postagem[]>{
    return this.PostagemService.findByTexto(texto)
}

}
