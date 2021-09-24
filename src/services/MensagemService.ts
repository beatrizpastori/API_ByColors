import { getCustomRepository, Repository } from "typeorm";
import { Mensagem } from "../entities/Mensagem"
import { MensagemRepository } from "../repositories/MensagemRepository";

interface IMensagemCreate{
    id_user: number;
    id_doenca: number;
    conteudo_msg: string;
}

class MensagemService{
    private mensagemRepository: Repository<Mensagem>;

    constructor() {
        this.mensagemRepository = getCustomRepository(MensagemRepository);
    }

    //Enviar Mensagem
    async enviar_mensagem ({id_user, id_doenca, conteudo_msg}: IMensagemCreate){

        const mensagem = this.mensagemRepository.create({
            id_user,
            id_doenca,
            conteudo_msg
        });

        await this.mensagemRepository.save(mensagem);

        return mensagem;
    }
}

export {MensagemService};