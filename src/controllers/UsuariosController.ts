import { Request, Response } from 'express';
import { UsuariosService } from '../services/UsuariosService';

class UsuariosController {
    //Cadastrar Usuário
    async cadastrar_Usuario(request: Request, response: Response) {
        const { nome_usuario, telefone, email, senha, cidade, estado, avatar } = request.body;

        const usuariosService = new UsuariosService();

        try {
            const usuarios = await usuariosService.cadastrar_Usuario({ nome_usuario, telefone, email, senha, cidade, estado, avatar });
        
            return response.json(usuarios);
        }
        catch(err) {
            return response.status(400).json({
                message: err.message,
            });
        }
    }

    //Achar Usuário Por Nome
    async acharPorNome_Usuario(request: Request, response: Response) {
        const { username } = request.params;

        const usuariosService = new UsuariosService();

        const usuarios = await usuariosService.acharPorNome_Usuario(username);

        return response.json(usuarios);
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