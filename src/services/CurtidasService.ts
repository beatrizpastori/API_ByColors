import { getCustomRepository, Repository } from "typeorm";
import { Curtida } from "../entities/Curtidas"
import { CurtidasRepository } from "../repositories/CurtidasRepository";

interface ICurtidaCreate{
    id_usuario: number;
    id_publicacao: number;
}

class CurtidaService{
    private curtidaRepository: Repository<Curtida>;

    constructor() {
        this.curtidaRepository = getCustomRepository(CurtidasRepository);
    }

    //Curtir
    async curtir ({id_usuario, id_publicacao}: ICurtidaCreate){

        const curtida = this.curtidaRepository.create({
            id_usuario,
            id_publicacao
        });

        await this.curtidaRepository.save(curtida);

        return curtida;
    }

    //Contar Curtidas por Publicação
    async ContarPorPubli_Curtidas (id_publicacao:string){

        const count = this.curtidaRepository.count({
            where: { id_publicacao },
        });

        return count;
    }

    //Achar Curtida por Nome e Post
    async AcharPorNomeEPost_Curtidas (id_publicacao:string, id_usuario:string) {

        const find = this.curtidaRepository.find({
            where: { id_publicacao, id_usuario },
        });

        return find;
    }

    //Descurtir
    async descurtir (id_publicacao:any, id_usuario:any){
        try {
            return await this.curtidaRepository.createQueryBuilder()
            .delete()
            .from(Curtida)
            .where("curtidas.id_publicacao = :id_publicacao", { id_publicacao })
            .andWhere("curtidas.id_usuario = :id_usuario", { id_usuario })
            .execute();
        }
        catch(err) {
            
        }
    }
}

export {CurtidaService};