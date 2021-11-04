import {Request, Response} from "express";
import { DenunciaService } from "../services/DenunciasService";

class DenunciasController {
    async denunciar (request: Request, response:Response){
        const {id_user, id_post} = request.body;
        const denunciaService = new DenunciaService();

        try{
            const denuncias = await denunciaService.denunciar({
                id_user, 
                id_post
            });

            return response.json(denuncias);
        }
        catch(e) {
            return response.status(400).json({
                message: e.message,
            });
        }
    }
}

export {DenunciasController};