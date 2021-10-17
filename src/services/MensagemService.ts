import { getCustomRepository, Repository } from "typeorm";
import { Mensagem } from "../entities/Mensagem"
import { MensagemRepository } from "../repositories/MensagemRepository";

interface IMensagemCreate{
    id_usuario: number;
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
    async criar_Mensagem ({id_usuario, id_doenca, conteudo_msg}: IMensagemCreate){
        const mensagem = this.mensagemRepository.create({
            id_usuario,
            id_doenca,
            conteudo_msg,
            excluido:false,
        });

        await this.mensagemRepository.save(mensagem);

        return mensagem;
    }

    //Listar Mensagem Por Doença
    async listarPorDoenca_Mensagem ( id_doenca: string){
        const query = this.mensagemRepository.createQueryBuilder("mensagem");
    
        query.leftJoinAndSelect("mensagem.usuario","usuario");
        query.where("id_doenca = :id_doenca", { id_doenca });
        query.orderBy("data", "ASC");
    
        return await query.getMany();
    }
}

export {MensagemService};