import { getCustomRepository, Repository } from "typeorm";
import { Doenca } from "../entities/Doencas";
import { DoencaRepository } from "../repositories/DoencasRepository";

interface IDoencasCreate{
    id_mes: number;
    nome_doenca: string;
    nome_mes: string;
    definicao: string;
    estatisticas: string;
    aumenta_risco: string;
    prevencao: string;
    sintomas: string;
    deteccao: string;
    diagnostico: string;
    tratamento: string;
    ordem: number;
    excluido?: boolean;
}

class DoencasService{
    private doencasRepository: Repository<Doenca>;

    constructor() {
        this.doencasRepository = getCustomRepository(DoencaRepository);
    }

    //Cadastrar Doença
    async cadastro_doenca ({id_mes, nome_doenca, nome_mes, definicao, estatisticas, aumenta_risco, prevencao, sintomas, deteccao, diagnostico, tratamento, ordem}: IDoencasCreate){

        const doencas = this.doencasRepository.create({
            id_mes, 
            nome_doenca, 
            nome_mes, 
            definicao, 
            estatisticas, 
            aumenta_risco, 
            prevencao, 
            sintomas, 
            deteccao, 
            diagnostico, 
            tratamento, 
            ordem
        });

        await this.doencasRepository.save(doencas);

        return doencas;
    }

}

export {DoencasService};