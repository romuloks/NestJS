import { IsNotEmpty, MaxLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn,} from "typeorm";

@Entity({name: "tb_postagens"})
export class postagem{
    @PrimaryGeneratedColumn()
    id: number
    
    @IsNotEmpty()
    @MaxLength(100)
    @Column({length: 50, nullable:false})
    comentario:string
    @Column({length: 500, nullable:false})
    texto: string
    @UpdateDateColumn()
    data: Date
}