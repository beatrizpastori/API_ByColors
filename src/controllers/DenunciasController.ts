import {Request, Response} from "express";
import { DenunciaService } from "../services/DenunciasService";

class DenunciasController {
    async denunciar (request: Request, response:Response){
        const {id_usuario, id_publicacao} = request.body;
        const denunciaService = new DenunciaService();

        try{
            const denuncias = await denunciaService.denunciar({
                id_usuario,
                id_publicacao
            });

            return response.json(denuncias);
        }
        catch(e) {
            return response.status(400).json({
                message: e.message,
            });
        }
    }

    //Contar Denúncias por Publicação
    async ContarPorPubli_Denuncias(request: Request, response: Response) {
        const { id_publicacao } = request.params;

        const denunciasService = new DenunciaService();

        const list = await denunciasService.ContarPorPubli_Denuncias(id_publicacao);

        return response.json(list);
    }
}

export {DenunciasController};