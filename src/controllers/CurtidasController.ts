import {Request, Response} from "express";
import { CurtidaService } from "../services/CurtidasService";


class CurtidasController {
    async curtir (request: Request, response:Response){
        const {id_user, id_post} = request.body;
        const curtidaService = new CurtidaService();

        try{
            const curtidas = await curtidaService.curtir({
                id_user, 
                id_post
            });

            return response.json(curtidas);
        }
        catch(e) {
            return response.status(400).json({
                message: e.message,
            });
        }
    }
}

export {CurtidasController};