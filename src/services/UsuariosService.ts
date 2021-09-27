import { getCustomRepository, Repository } from "typeorm";
import { Usuario } from "../entities/Usuario";
import { UsuariosRepository } from "../repositories/UsuariosRepository";

interface IUsuariosCreate {
    adm: boolean;
    nome_usuario: string;
    telefone: string;
    email: string;
    senha: string;
    cidade: string;
    estado: string;
    bio: string;
    avatar: number;
    excluido?: boolean;
}

class UsuariosService {
    private usuariosRepository: Repository<Usuario>;

    constructor() {
        this.usuariosRepository = getCustomRepository(UsuariosRepository);
    }

    //Cadastrar Usuário
    async cadastrar_Usuario({ adm, nome_usuario, telefone, email, senha, cidade, estado, bio, avatar } : IUsuariosCreate) {
        const userAlreadyExists = await this.usuariosRepository.findOne({
            email
        });

        if(userAlreadyExists) {
            throw new Error("Email já cadastrado!");
        }
        
        const usuarios = this.usuariosRepository.create({
            adm,
            nome_usuario,
            telefone,
            email,
            senha,
            cidade,
            estado,
            bio,
            avatar,
            excluido:false,
        });

        await this.usuariosRepository.save(usuarios);

        return usuarios;
    }

    //Listar Todos Usuários
    async listar_Usuario() {
        const usuarios = await this.usuariosRepository.find();

        return usuarios;
    }

    //Achar Usuário por Email
    async acharPorEmail_Usuario(email: string) {
        const list = await this.usuariosRepository.find({
            where: { email }
        });

        return list;
    }

    //Achar Usuário por Nome
    async acharPorNome_Usuario(nome_usuario: string) {
        const usuarios = await this.usuariosRepository.find({
            where: { nome_usuario }
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