import { IsNotEmpty } from "class-validator";
import { categoria } from "src/categoria/entities/categoria.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn,} from "typeorm"

@Entity({name: "tb_produto"})
export class produto{

    @PrimaryGeneratedColumn()
    id: number
    
    @IsNotEmpty()
    @Column({length:255, nullable:false })
    descricao:string

    @ManyToOne(() => categoria, (categoria) => categoria.produto)
    categoria: categoria[]

    @Column({length: 500, nullable:false})
    titulo:string

    @Column({length: 1000, nullable:false})
    texto: string
@UpdateDateColumn()
    data: Date
    
    

}




