import { IsNotEmpty, MaxLength } from "class-validator";
import { Tema } from "src/tema/entities/tema.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn,} from "typeorm";

@Entity({name: "tb_postagens"})
export class postagem{
    @PrimaryGeneratedColumn()
    id: number
    
    @IsNotEmpty()
    @MaxLength(100)
    @Column({length: 50, nullable:false})
    comentario:string
    @Column({length: 500, nullable:false})
    titulo:string
    @Column({length: 700, nullable:false})
    profição:string
    @Column({length: 1000, nullable:false})
    texto: string
    @UpdateDateColumn()
    data: Date

    @ManyToOne(() => Tema, (tema) => tema.postagem,  {
        onDelete: "CASCADE"
    })
      tema: Tema




}