import { getCustomRepository, Repository } from "typeorm";
import { Contatos } from "../entities/Contatos";
import { ContatosRepository } from "../repositories/ContatosRepository";

interface IContatosCreate{
    id_doenca: number;
    nome_lugar: string;
    telefone: string;
    site: string;
    email: string;
    excluido?: boolean;
}

class ContatosService{
    private contatosRepository: Repository<Contatos>;

    constructor() {
        this.contatosRepository = getCustomRepository(ContatosRepository);
    }

    //Cadastrar Contato
    async cadastro_contato ({id_doenca, nome_lugar, telefone, site, email}: IContatosCreate){

        const contatos = this.contatosRepository.create({
            id_doenca,
            nome_lugar,
            telefone,
            site,
            email
        });

        await this.contatosRepository.save(contatos);

        return contatos;
    }

}

export {ContatosService};