import {Request, Response} from "express";
import { MensagemService } from "../services/MensagemService";


class MensagemController {
    async enviar_mensagem (request: Request, response:Response){
        const {id_user, id_doenca, conteudo_msg} = request.body;
        const mensagemService = new MensagemService();

        try{
            const mensagem = await mensagemService.enviar_mensagem({
                id_user, 
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
}

export {MensagemController};