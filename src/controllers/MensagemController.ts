import {Request, Response} from "express";
import { MensagemService } from "../services/MensagemService";


class MensagemController {
    async criar_Mensagem (request: Request, response:Response){
        const {id_usuario, id_doenca, conteudo_msg} = request.body;
        const mensagemService = new MensagemService();

        try{
            const mensagem = await mensagemService.criar_Mensagem({
                id_usuario,
                id_doenca, 
                conteudo_msg
            });

            return response.json(mensagem);
        }
        catch(e) {
            return response.status(400).json({
                message: e.message,
            });
        }
    }

    async listarPorDoenca_Mensagem (request: Request, response:Response){
        const { id_doenca } = request.params;

        const mensagemService = new MensagemService();

        const list = await mensagemService.listarPorDoenca_Mensagem(id_doenca);

        return response.json(list);
    }
}

export {MensagemController};