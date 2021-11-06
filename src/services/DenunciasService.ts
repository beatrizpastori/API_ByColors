import { getCustomRepository, Repository } from "typeorm";
import { Denuncia } from "../entities/Denuncias"
import { DenunciasRepository } from "../repositories/DenunciasRepository";

interface IDenunciaCreate{
    id_usuario: number;
    id_publicacao: number;
}

class DenunciaService{
    private denunciaRepository: Repository<Denuncia>;

    constructor() {
        this.denunciaRepository = getCustomRepository(DenunciasRepository);
    }

    //Denunciar
    async denunciar ({id_usuario, id_publicacao}: IDenunciaCreate){

        const denuncia = this.denunciaRepository.create({
            id_usuario,
            id_publicacao
        });

        await this.denunciaRepository.save(denuncia);

        return denuncia;
    }

    //Contar Denúncias por Publicação
    async ContarPorPubli_Denuncias (id_publicacao:string){

        const count = this.denunciaRepository.count({
            where: { id_publicacao },
        });

        return count;
    }
}

export {DenunciaService};