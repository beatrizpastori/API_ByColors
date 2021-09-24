import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import  { Doenca } from "./Doencas";

@Entity("contatos")
class Contatos {

    @PrimaryGeneratedColumn('increment')
    id_contatos: number;

    @JoinColumn({name: "id_doenca"})
    @ManyToOne(() => Doenca)
    id_doenca: number;

    @Column()
    nome_lugar: string;

    @Column()
    telefone: string;

    @Column()
    site: string;

    @Column()
    email: string;
    
    @Column()
    excluido: boolean;
}

export { Contatos };