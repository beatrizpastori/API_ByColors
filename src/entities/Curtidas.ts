import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

import { Usuario } from "./Usuario";
import { Publicacao } from "./Publicacao";

@Entity("curtidas")
class Curtida {

    @PrimaryGeneratedColumn('increment')
    id_curtida: number;

    @JoinColumn({name: "id_publicacao"})
    @OneToOne(() => Publicacao)
    id_post: number;

    @JoinColumn({name: "id_usuario"})
    @OneToOne(() => Usuario)
    id_user: number;

}

export { Curtida };