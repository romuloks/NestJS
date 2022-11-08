import { IsNotEmpty, MinLength, } from "class-validator";
import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Postagem } from "../../postagem/entities/postagem.entity";



@Entity({name: "tb-usuarios"})
export class Usuario{

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    @ApiProperty()
    usuario: string //e-mail

    @IsNotEmpty()
    @MinLength(8)
    @Column({length: 255, nullable: false}) 
    @ApiProperty()
    senha: string

    @Column({length: 5000})
    @ApiProperty()
    foto: string
    
    @ApiProperty()
    @OneToMany(()=> Postagem, (Postagem) => Postagem.usuario)
    postagem:Postagem[]






}