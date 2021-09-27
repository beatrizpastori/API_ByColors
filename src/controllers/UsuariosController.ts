import { Request, Response } from 'express';
import { UsuariosService } from '../services/UsuariosService';

class UsuariosController {
    //Cadastrar Usuário
    async cadastrar_Usuario(request: Request, response: Response) {
        const { adm, nome_usuario, telefone, email, senha, cidade, estado, bio, avatar } = request.body;

        const usuariosService = new UsuariosService();

        try {
            const usuarios = await usuariosService.cadastrar_Usuario({ adm, nome_usuario, telefone, email, senha, cidade, estado, bio, avatar });
            
            return response.json(usuarios);
        }
        catch(err) {
            return response.status(400).json({
                message: err.message,
            });
        }
    }

    //Achar Usuário Por Nome
    async listar_Usuario(request: Request, response: Response) {
        const usuariosService = new UsuariosService();

        const usuarios = await usuariosService.listar_Usuario();

        return response.json(usuarios);
    }

    //Achar Usuário Por Email
    async acharPorEmail_Usuario(request: Request, response: Response) {
        const { email } = request.params;

        const usuariosService = new UsuariosService();

        const list = await usuariosService.acharPorEmail_Usuario(email);

        return response.json(list);
    }

    //Achar Usuário Por Nome
    async acharPorNome_Usuario(request: Request, response: Response) {
        const { username } = request.params;

        const usuariosService = new UsuariosService();

        const list = await usuariosService.acharPorNome_Usuario(username);

        return response.json(list);
    }

    /*
    async atualizar(request: Request, response: Response) {
        const { username } = request.params;
        const { chat } = request.body;

        const usuariosService = new UsuariosService();

        const usuarios = await usuariosService.update(username, chat);

        return response.json(usuarios);
    }*/
}

export { UsuariosController };