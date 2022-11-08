import { IsNotEmpty } from "class-validator";
import { produto } from "src/produto/entities/produto.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn,} from "typeorm"

@Entity({name: "tb_categoria"})
export class categoria{

    @PrimaryGeneratedColumn()
    id: number
    
    @IsNotEmpty()
    @Column({length: 50, nullable:false})
    comentario:string

    @Column({length: 500, nullable:false})
    titulo:string

    @Column({length: 700, nullable:false})
    proficao:string

    @Column({length: 1000, nullable:false})
    texto: string

    @UpdateDateColumn()
    data: Date

    @OneToMany(() => produto, (produto) => produto.categoria,  {
        onDelete: "CASCADE"
    })
      produto:produto


    }
    