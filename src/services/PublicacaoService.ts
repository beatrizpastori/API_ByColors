import { getCustomRepository, Repository } from "typeorm";
import { Publicacao } from "../entities/Publicacao"
import { PublicacaoRepository } from "../repositories/PublicacaoRepository";

interface IPublicacaoCreate{
    id_usuario: number;
    id_doenca: number;
    doenca_id: number;
    conteudo: string;
    imagem: string;
    excluido?: boolean;
}

class PublicacaoService{
    private publicacaoRepository: Repository<Publicacao>;

    constructor() {
        this.publicacaoRepository = getCustomRepository(PublicacaoRepository);
    }

    //Criar Publicação
    async criar_Publicacao ({id_usuario, id_doenca, conteudo, imagem}: IPublicacaoCreate){

        const publicacao = this.publicacaoRepository.create({
            id_usuario,
            id_doenca,
            doenca_id: id_doenca,
            conteudo,
            imagem,
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
    async listarPorDoenca_Publicacao(id_doenca: string){
        const query = this.publicacaoRepository.createQueryBuilder("publicacao");
    
        query.leftJoinAndSelect("publicacao.usuario","usuario");
        query.where("id_doenca = :id_doenca", { id_doenca });
        query.andWhere("publicacao.excluido = false");
        query.orderBy("data", "DESC");
    
        return await query.getMany();
    }

    //Listar Publicações Por Usuário
    async listarPorUsuario_Publicacao(id_usuario: string){
        const query = this.publicacaoRepository.createQueryBuilder("publicacao");
    
        query.leftJoinAndSelect("publicacao.usuario","usuario");
        query.where("publicacao.id_usuario = :id_usuario", { id_usuario });
        query.andWhere("publicacao.excluido = false");
        query.orderBy("data", "DESC");
    
        return await query.getMany();
    }

    //Listar Publicações Por Id
    async listarPorId_Publicacao(id_publicacao: string){
        const list = await this.publicacaoRepository.find({
            where: { id_publicacao }
        });

        return list;
    }

    //Atualizar Publicação
    async atualizar_Pulicacao(id_publicacao:string, doenca_id: number, conteudo: string, imagem: string) {
        const publicacao = await this.publicacaoRepository.createQueryBuilder().
        update(Publicacao)
        .set({ doenca_id, conteudo, imagem})
        .where("id_publicacao = :id_publicacao", {
            id_publicacao
        })
        .execute();
    }

    //Excluir Publicacao
    async excluir_Publicacao(id_publicacao:string, excluido:boolean) {
        const publicacao = await this.publicacaoRepository.createQueryBuilder().
        update(Publicacao)
        .set({ excluido })
        .where("id_publicacao = :id_publicacao", {
            id_publicacao
        })
        .execute();
    }
}

export {PublicacaoService};