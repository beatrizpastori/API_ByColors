import { getCustomRepository, Repository } from "typeorm";
import { Curtida } from "../entities/Curtidas"
import { CurtidasRepository } from "../repositories/CurtidasRepository";

interface ICurtidaCreate{
    id_user: number;
    id_post: number;
}

class CurtidaService{
    private curtidaRepository: Repository<Curtida>;

    constructor() {
        this.curtidaRepository = getCustomRepository(CurtidasRepository);
    }

    //Curtir
    async curtir ({id_user, id_post}: ICurtidaCreate){

        const curtida = this.curtidaRepository.create({
            id_user,
            id_post
        });

        await this.curtidaRepository.save(curtida);

        return curtida;
    }
}

export {CurtidaService};