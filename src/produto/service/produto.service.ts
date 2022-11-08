import { Injectable } from "@nestjs/common/decorators";
import { HttpException } from "@nestjs/common/exceptions";
import { HttpStatus } from "@nestjs/common/enums";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, ILike, DeleteResult } from "typeorm";
import { produto } from "../entities/produto.entity";


@Injectable()
export class produtoService{

    constructor(
        @InjectRepository(produto)
        private produtoRepository: Repository<produto>
    ){ }

    async findAll(): Promise<produto[]> {
        return await this.produtoRepository.find({  
            relations: {
                categoria:true
            }
        })
    }
     async findById(id: number): Promise<produto>{
        let produto = await this.produtoRepository.findOne ({
         where:{
            id
         },
         relations: {
            categoria: true
         }
   })
   if (!produto)
   throw new HttpException ('produto não existe', HttpStatus.NOT_FOUND)
   
   return produto
   
   }
   async findByTexto(texto: string): Promise<produto[]> {
       return await this.produtoRepository.find({
           where: {
               texto:ILike(`%${texto} %`)
           },
           relations:{
           categoria: true
           }
       
           })
       }
   
   async findByTitulo(titulo: string): Promise<produto[]> {
           return await this.produtoRepository.find({
               where: {
                   titulo: ILike(`%${titulo} %`)
               },
               relations:{
               categoria: true
               }
           
               })
           }
   
   
   async create(produto: produto): Promise<produto> {
       return await this.produtoRepository.save(produto)
   }
   
   async update(produto: produto): Promise<produto> {
       let buscarProduto= await this.findById(produto.id)
   
       if (!buscarProduto || !buscarProduto.id)
           throw new HttpException('produto Não Existe', HttpStatus.NOT_FOUND)
   
       return await this.produtoRepository.save(produto)
   }
   
   
   async delete(id: number): Promise<DeleteResult> {
       let buscarProduto = await this.findById(id)
   
       if (!buscarProduto)
           throw new HttpException('produto não encontrada', HttpStatus.NOT_FOUND)
   
       return await this.produtoRepository.delete(id)
   }














}