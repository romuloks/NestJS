import{ Controller,Get, HttpCode, Param, Delete, Post, Put, Body} from "@nestjs/common"
import { HttpStatus } from "@nestjs/common/enums";
import { ParseIntPipe } from "@nestjs/common/pipes"; 
import { categoria } from "../entities/categoria.entity"; 
import { CategoriaService } from "../service/categoria.service";

@Controller("/categoria")
export class categoriaController{
    
    constructor(private readonly categoriaService: CategoriaService) {}
@Get()
@HttpCode(HttpStatus.OK)
findAll(): Promise<categoria[]> {
    return this.categoriaService.findAll();
}


@Get('/:id')
@HttpCode(HttpStatus.OK)
findById(@Param('id', ParseIntPipe) id: number): Promise<categoria> {
    return this.categoriaService.findById(id)
}

@Get('/titulo/:titulo')
@HttpCode(HttpStatus.OK)
findByTitulo(@Param('titulo') titulo: string): Promise<categoria[]> {
    return this.categoriaService.findByTitulo(titulo)
}
@Post()
@HttpCode(HttpStatus.CREATED)
create(@Body() categoria: categoria): Promise<categoria>{
    return this.categoriaService.create(categoria)
}



@Put()
@HttpCode(HttpStatus.OK)
update(@Body() categoria: categoria): Promise<categoria>{
    return this.categoriaService.update(categoria)
}


@Delete('/:id')
@HttpCode(HttpStatus.NO_CONTENT)
delete(@Param('id', ParseIntPipe) id: number){
    return this.categoriaService.delete(id)
}
@Get('/Texto/:texto')
@HttpCode(HttpStatus.OK)
findByTexto(@Param('texto') texto:string): Promise<categoria[]>{
    return this.categoriaService.findByTexto(texto)
}
@Get('/proficao/:proficao')
@HttpCode(HttpStatus.OK)
findByProficao(@Param('proficao') proficao: string): Promise<categoria[]> {
    return this.categoriaService.findByProficao(proficao)
}


}
