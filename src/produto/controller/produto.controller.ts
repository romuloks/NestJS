import{Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put} from "@nestjs/common"
import { produto } from "../entities/produto.entity";
import { produtoService } from "../service/produto.service";
@Controller("/produto")
export class produtoController{
    constructor(private readonly produtoService:produtoService) {}
@Get()
@HttpCode(HttpStatus.OK)
findAll(): Promise<produto[]> {
    return this.produtoService.findAll();
}

@Get('/:id')
@HttpCode(HttpStatus.OK)
findById(@Param('id', ParseIntPipe) id: number): Promise<produto> {
    return this.produtoService.findById(id)
}

@Get('/titulo/:titulo')
@HttpCode(HttpStatus.OK)
findByTitulo(@Param('titulo') titulo: string): Promise<produto[]> {
    return this.produtoService.findByTitulo(titulo)
}
@Post()
@HttpCode(HttpStatus.CREATED)
create(@Body() produto: produto): Promise<produto>{
    return this.produtoService.create(produto)
}



@Put()
@HttpCode(HttpStatus.OK)
update(@Body() produto: produto): Promise<produto>{
    return this.produtoService.update(produto)
}


@Delete('/:id')
@HttpCode(HttpStatus.NO_CONTENT)
delete(@Param('id', ParseIntPipe) id: number){
    return this.produtoService.delete(id)
}
@Get('/Texto/:texto')
@HttpCode(HttpStatus.OK)
findByTexto(@Param('texto') texto:string): Promise<produto[]>{
    return this.produtoService.findByTexto(texto)
}
@Get('/profiçao/:profiçao')
@HttpCode(HttpStatus.OK)
findByProfiçao(@Param('profiçao') profiçao: string): Promise<produto[]> {
    return this.produtoService.findByTitulo(profiçao)
}

}