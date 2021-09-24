import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToOne, JoinColumn } from 'typeorm';

import { Usuario } from "./Usuario";

@Entity("publicacao")
class Publicacao {

    @PrimaryGeneratedColumn('increment')
    id_publicacao: number;

    @JoinColumn({name: "id_usuario"})
    @OneToOne(() => Usuario)
    id_user: number;

    @Column()
    id_doenca: number;

    @Column()
    conteudo: string;

    @Column()
    imagem: string;

    @CreateDateColumn()
    data: Date;

    @Column()
    denuncias: number;
    
    @Column()
    excluido: boolean;
}

export { Publicacao };