import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Tema } from "src/tema/entities/tema.entity";
import { DeleteResult, ILike, Repository } from "typeorm";

@Injectable()
export class TemaService{
    TemaRepository: any;
    constructor(
        @InjectRepository(Tema)
        private temaRepository:  Repository<Tema>
    ){}
    async findAll(): Promise<Tema> {
        return await this.TemaRepository.find({
            relations:{
                postagem: true

            }
        })
    }


    async findById(id: number): Promise<Tema> {

        let tema = await this.temaRepository.findOne({
            where: {
                id
            },
            relations:{
                postagem: true
            }
        })

        if (!tema)
            throw new HttpException('Tema não existe', HttpStatus.NOT_FOUND)

        return tema
    }

    async findByDescricao(Texto): Promise<Tema[]> {
        return await this.temaRepository.find({
            where: {
                descricao: ILike(`%${Texto}%`)
            },
            relations: {
                postagem: true
            }
        })
    }

    async create(tema: Tema): Promise<Tema> {
        return await this.temaRepository.save(tema)
    }

    async update(tema: Tema): Promise<Tema> {
        let buscarTema= await this.findById(tema.id)

        if (!buscarTema || !buscarTema.id)
            throw new HttpException('Tema Não Existe', HttpStatus.NOT_FOUND)

        return await this.temaRepository.save(tema)
    }


    async delete(id: number): Promise<DeleteResult> {
        let buscarPostagem = await this.findById(id)

        if (!buscarPostagem)
            throw new HttpException('Tema não encontrada', HttpStatus.NOT_FOUND)

        return await this.temaRepository.delete(id)
    }
    



}