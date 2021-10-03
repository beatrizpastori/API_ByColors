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

    //Achar Usuário por Id
    async acharPorId_Usuario(id_usuario: string) {
        const usuarios = await this.usuariosRepository.find({
            where: { id_usuario }
        });
        
        return usuarios;
    }

    //Atualizar Usuário
    async atualizar_Usuario(id_usuario:string, nome_usuario: string, telefone: string, email: string, senha: string, cidade: string, estado: string, bio: string, avatar: number) {
        const usuarios = await this.usuariosRepository.createQueryBuilder().
        update(Usuario)
        .set({ nome_usuario, telefone, email, senha, cidade, estado, bio, avatar })
        .where("id_usuario = :id_usuario", {
            id_usuario
        })
        .execute();
    }

    //Excluir Usuário
    async excluir_Usuario(id_usuario:string, excluido:boolean) {
        const usuarios = await this.usuariosRepository.createQueryBuilder().
        update(Usuario)
        .set({ excluido })
        .where("id_usuario = :id_usuario", {
            id_usuario
        })
        .execute();
    }
}

export { UsuariosService };