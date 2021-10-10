import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

import { Doenca } from './Doencas';
import { Usuario } from "./Usuario";

@Entity("mensagem")
class Mensagem {

    @PrimaryGeneratedColumn('increment')
    id_msg: number;

    @JoinColumn({name: "id_usuario"})
    @ManyToOne(() => Usuario)
    id_usuario: number;

    @JoinColumn({name: "id_doenca"})
    @ManyToOne(() => Doenca)
    id_doenca: number;

    @Column()
    conteudo_msg: string;

    @CreateDateColumn()
    data: Date;

    @Column()
    excluido: boolean;
}

export { Mensagem };