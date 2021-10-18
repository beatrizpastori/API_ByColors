import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, JoinColumn, ManyToOne } from 'typeorm';
import { Doenca } from './Doencas';
import { Usuario } from "./Usuario";

@Entity("publicacao")
class Publicacao {

    @PrimaryGeneratedColumn('increment')
    id_publicacao: number;

    @Column()
    id_usuario: number;

    @JoinColumn({name: "id_usuario"})
    @ManyToOne(() => Usuario)
    usuario: Usuario;

    @Column({ name: "id_doenca" })
    doenca_id: number;

    @JoinColumn({name: "id_doenca"})
    @ManyToOne(() => Doenca)
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