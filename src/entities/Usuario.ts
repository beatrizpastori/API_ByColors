import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("usuarios")
class Usuario {

    @PrimaryGeneratedColumn('increment')
    id_usuario: number;

    @Column()
    adm: boolean;

    @Column()
    nome_usuario: string;

    @Column()
    telefone: string;

    @Column()
    email: string;

    @Column()
    senha: string;

    @Column()
    cidade: string;

    @Column()
    estado: string;

    @Column()
    bio: string;

    @Column()
    avatar: number;

    @Column()
    excluido: boolean;
}

export { Usuario };