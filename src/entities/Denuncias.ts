import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

import { Usuario } from "./Usuario";
import { Publicacao } from "./Publicacao";

@Entity("denuncias")
class Denuncia {

    @PrimaryGeneratedColumn('increment')
    id_denuncia: number;

    @JoinColumn({name: "id_publicacao"})
    @OneToOne(() => Publicacao)
    id_post: number;

    @JoinColumn({name: "id_usuario"})
    @OneToOne(() => Usuario)
    id_user: number;

}

export { Denuncia };