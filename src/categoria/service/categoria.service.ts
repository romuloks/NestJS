import { HttpException,HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { categoria } from "../entities/categoria.entity";
import { DeleteResult, ILike, Repository } from "typeorm";
@Injectable()
export class CategoriaService {
    
    constructor(
        
        @InjectRepository(categoria)
        private categoriaRepository : Repository<categoria>

     ) {}

 async findAll(): Promise<categoria[]> {
    return await this.categoriaRepository.find({
relations: {
    produto:true
}
    })
 }
async findById(id: number): Promise<categoria>{
let categoria = await this.categoriaRepository.findOne ({
where:{
    id
},
relations: {
    produto:true
}

})

if (!categoria)
throw new HttpException ('categoria não existe', HttpStatus.NOT_FOUND)

return categoria

}
async findByTexto(texto: string): Promise<categoria[]> {
    return await this.categoriaRepository.find({
        where: {
            texto:ILike(`%${texto} %`)
        },
        relations:{
        produto:true
        }
    
        })
    }

async findByTitulo(titulo: string): Promise<categoria[]> {
        return await this.categoriaRepository.find({
            where: {
                titulo:ILike(`%${titulo} %`)
            },
            relations:{
            produto:true
            }
        
            })
        }
        async findByProficao(proficao: string): Promise<categoria[]> {
            return await this.categoriaRepository.find({
                where: {
                    titulo:ILike(`%${proficao} %`)
                },
                relations:{
                produto:true
                }
            
                })
            }
    

async create(categoria: categoria): Promise<categoria> {
    return await this.categoriaRepository.save(categoria)
}

async update(categoria: categoria): Promise<categoria> {
    let buscarCategoria= await this.findById(categoria.id)

    if (!buscarCategoria || !buscarCategoria.id)
        throw new HttpException('categoria Não Existe', HttpStatus.NOT_FOUND)

    return await this.categoriaRepository.save(categoria)
}


async delete(id: number): Promise<DeleteResult> {
    let buscarCategoria = await this.findById(id)

    if (!buscarCategoria)
        throw new HttpException('categoria não encontrada', HttpStatus.NOT_FOUND)

    return await this.categoriaRepository.delete(id)
}
}
