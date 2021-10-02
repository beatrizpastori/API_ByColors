import { getCustomRepository, Repository } from "typeorm";
import { Mensagem } from "../entities/Mensagem"
import { MensagemRepository } from "../repositories/MensagemRepository";

interface IMensagemCreate{
    id_user: number;
    id_doenca: number;
    conteudo_msg: string;
    excluido?: boolean;
}

class MensagemService{
    private mensagemRepository: Repository<Mensagem>;

    constructor() {
        this.mensagemRepository = getCustomRepository(MensagemRepository);
    }

    //Criar Mensagem
    async criar_Mensagem ({id_user, id_doenca, conteudo_msg}: IMensagemCreate){

        const mensagem = this.mensagemRepository.create({
            id_user,
            id_doenca,
            conteudo_msg,
            excluido:false,
        });

        await this.mensagemRepository.save(mensagem);

        return mensagem;
    }

    //Listar Mensagem Por Doença
    async listarPorDoenca_Mensagem ( id_doenca: string){

        const mensagem = this.mensagemRepository.find({
            where: { id_doenca }
        });

        return mensagem;
    }
}

export {MensagemService};