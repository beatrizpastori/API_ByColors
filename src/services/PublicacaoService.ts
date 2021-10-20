import { getCustomRepository, Repository } from "typeorm";
import { Publicacao } from "../entities/Publicacao"
import { PublicacaoRepository } from "../repositories/PublicacaoRepository";

interface IPublicacaoCreate{
    id_usuario: number;
    id_doenca: number;
    doenca_id: number;
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
    async criar_Publicacao ({id_usuario, id_doenca, conteudo, imagem, denuncias}: IPublicacaoCreate){

        const publicacao = this.publicacaoRepository.create({
            id_usuario,
            id_doenca,
            doenca_id: id_doenca,
            conteudo,
            imagem,
            denuncias,
            excluido:false,
        });

        await this.publicacaoRepository.save(publicacao);

        return publicacao;
    }

    //Listar Publicações
    async listar_Publicacao (){
        const query = this.publicacaoRepository.createQueryBuilder("publicacao");
    
        query.leftJoinAndSelect("publicacao.usuario","usuario");
        query.where("publicacao.excluido = false");
        query.orderBy("data", "DESC");
    
        return await query.getMany();
    }

    //Listar Publicações Por Doença
    async listarPorDoenca_Publicacao ( id_doenca: string){
        const query = this.publicacaoRepository.createQueryBuilder("publicacao");
    
        query.leftJoinAndSelect("publicacao.usuario","usuario");
        query.where("id_doenca = :id_doenca", { id_doenca });
        query.andWhere("publicacao.excluido = false");
        query.orderBy("data", "DESC");
    
        return await query.getMany();
    }

    //Listar Publicações Por Usuário
    async listarPorUsuario_Publicacao ( id_usuario: string){
        const query = this.publicacaoRepository.createQueryBuilder("publicacao");
    
        query.leftJoinAndSelect("publicacao.usuario","usuario");
        query.where("publicacao.id_usuario = :id_usuario", { id_usuario });
        query.andWhere("publicacao.excluido = false");
        query.orderBy("data", "DESC");
    
        return await query.getMany();
    }

    //Excluir Publicacao
    async excluir_Publicacao(id_publicacao:string, excluido:boolean) {
        const usuarios = await this.publicacaoRepository.createQueryBuilder().
        update(Publicacao)
        .set({ excluido })
        .where("id_publicacao = :id_publicacao", {
            id_publicacao
        })
        .execute();
    }
}

export {PublicacaoService};