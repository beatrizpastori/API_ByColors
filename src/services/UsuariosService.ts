import { getCustomRepository, Repository } from "typeorm";
import { Usuario } from "../entities/Usuario";
import { UsuariosRepository } from "../repositories/UsuariosRepository";

interface IUsuariosCreate {
    adm?: boolean;
    nome_usuario: string;
    telefone: string;
    email: string;
    senha: string;
    cidade: string;
    estado: string;
    avatar: number;
    excluido?: boolean;
}

class UsuariosService {
    private usuariosRepository: Repository<Usuario>;

    constructor() {
        this.usuariosRepository = getCustomRepository(UsuariosRepository);
    }

    //Cadastrar Usuário
    async cadastrar_Usuario({ nome_usuario, telefone, email, senha, cidade, estado, avatar } : IUsuariosCreate) {
        const userAlreadyExists = await this.usuariosRepository.findOne({
            email
        });

        if(userAlreadyExists) {
            throw new Error("Email já cadastrado!");
        }

        const usuarios = this.usuariosRepository.create({
            nome_usuario,
            telefone,
            email,
            senha,
            cidade,
            estado,
            avatar,
        });

        await this.usuariosRepository.save(usuarios);

        return usuarios;
    }

    //Achar Usuário por Nome
    async acharPorNome_Usuario(nome_usuario: string) {
        const usuarios = await this.usuariosRepository.findOne({
            nome_usuario
        });
        
        return usuarios;
    }

    /*Atualizar Usuário
    async update(email: string, chat: boolean) {
        const usuarios = await this.usuariosRepository.createQueryBuilder().
        update(Usuario)
        .set({ chat })
        .where("email = :email", {
            email
        }).execute();
    }*/
}

export { UsuariosService };