import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put ,UseGuards} from "@nestjs/common";
import { get } from "http";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger/dist/decorators";
import { Postagem } from "../entities/postagem.entity";
import { PostagemService } from "../service/postagem.service";
import { JwtAuthGuard } from "../../auth/guard/jwt-auth.guard";

@ApiTags()
@UseGuards(JwtAuthGuard)
@Controller("/postagens")
@ApiBearerAuth()
export class PostagemController{
    constructor(private readonly PostagemService: PostagemService) {}
    @Get()
    @HttpCode(HttpStatus.OK)
    findALL(): Promise<Postagem[]>{
        return this.PostagemService.findALL();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Postagem> {
        return this.PostagemService.findById(id)
    }

    @Get('/titulo/:titulo')
    @HttpCode(HttpStatus.OK)
    findByTitulo(@Param('titulo') titulo: string): Promise<Postagem[]> {
        return this.PostagemService.findByTitulo(titulo)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() Postagem:Postagem): Promise<Postagem>{
        return this.PostagemService.create(Postagem)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() Postagem:Postagem): Promise<Postagem>{
    return this.PostagemService.update(Postagem)
    
}

    @Delete('/id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
    return this.PostagemService.delete(id)

    }
}