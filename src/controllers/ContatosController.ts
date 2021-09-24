import {Request, Response} from "express";
import { ContatosService } from "../services/ContatosService";


class ContatosController {
    async cadastro_contato (request: Request, response:Response){
        const {id_doenca, nome_lugar, telefone, site, email} = request.body;
        const contatosService = new ContatosService();

        try{
            const contatos = await contatosService.cadastro_contato({
                id_doenca,
                nome_lugar,
                telefone,
                site,
                email
            });

            return response.json(contatos);
        }
        catch(e) {
            return response.status(400).json({
                message: e.message,
            });
        }
    }
}

export {ContatosController};