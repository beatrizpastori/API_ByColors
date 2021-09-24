import { getCustomRepository, Repository } from "typeorm";
import { Publicacao } from "../entities/Publicacao"
import { PublicacaoRepository } from "../repositories/PublicacaoRepository";

interface IPublicacaoCreate{
    id_user: number;
    id_doenca: number;
    conteudo: string;
    imagem: string;
    denuncias: number;
    excluido?: boolean;
}

class PublicacaoService{
    private publicacaoRepository: Repository<Publicacao>;

    constructor() {
        this.publicacaoRepository = getCustomRepository(PublicacaoRepository);
    }

    //Criar Publicação
    async criar_publicacao ({id_user, id_doenca, conteudo, imagem, denuncias}: IPublicacaoCreate){

        const publicacao = this.publicacaoRepository.create({
            id_user,
            id_doenca,
            conteudo,
            imagem,
            denuncias
        });

        await this.publicacaoRepository.save(publicacao);

        return publicacao;
    }

    //Achar publicação por conteúdo
    async achar_publi(conteudo: string) {
        const publicacao = await this.publicacaoRepository.findOne({
            conteudo
        });
        
        return publicacao;
    }
}

export {PublicacaoService};