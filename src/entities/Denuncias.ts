import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, Column } from 'typeorm';
import { Usuario } from "./Usuario";
import { Publicacao } from "./Publicacao";

@Entity("denuncias")
class Denuncia {

    @PrimaryGeneratedColumn('increment')
    id_denuncia: number;

    @Column()
    id_publicacao: number;
    
    @JoinColumn({name: "id_publicacao"})
    @OneToOne(() => Publicacao)
    post: number;

    @Column()
    id_usuario: number;

    @JoinColumn({name: "id_usuario"})
    @OneToOne(() => Usuario)
    user: number;

}

export { Denuncia };