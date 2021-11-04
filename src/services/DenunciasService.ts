import { getCustomRepository, Repository } from "typeorm";
import { Denuncia } from "../entities/Denuncias"
import { DenunciasRepository } from "../repositories/DenunciasRepository";

interface IDenunciaCreate{
    id_user: number;
    id_post: number;
}

class DenunciaService{
    private denunciaRepository: Repository<Denuncia>;

    constructor() {
        this.denunciaRepository = getCustomRepository(DenunciasRepository);
    }

    //Denunciar
    async denunciar ({id_user, id_post}: IDenunciaCreate){

        const denuncia = this.denunciaRepository.create({
            id_user,
            id_post
        });

        await this.denunciaRepository.save(denuncia);

        return denuncia;
    }
}

export {DenunciaService};