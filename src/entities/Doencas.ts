import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("doencas")
class Doenca {

    @PrimaryGeneratedColumn('increment')
    id_doenca: number;

    @Column()
    id_mes: number;

    @Column()
    nome_doenca: string;

    @Column()
    nome_mes: string;

    @Column()
    definicao: string;

    @Column()
    estatisticas: string;

    @Column()
    aumenta_risco: string;

    @Column()
    prevencao: string;

    @Column()
    sintomas: string;

    @Column()
    deteccao: string;

    @Column()
    diagnostico: string;

    @Column()
    tratamento: string;

    @Column()
    ordem: number;
    
    @Column()
    excluido: boolean;
}

export { Doenca };