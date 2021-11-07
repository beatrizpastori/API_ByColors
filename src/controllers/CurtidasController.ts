import {Request, Response} from "express";
import { CurtidaService } from "../services/CurtidasService";

class CurtidasController {
    async curtir (request: Request, response:Response){
        const {id_usuario, id_publicacao} = request.body;
        const curtidaService = new CurtidaService();

        try{
            const curtidas = await curtidaService.curtir({
                id_usuario, 
                id_publicacao
            });

            return response.json(curtidas);
        }
        catch(e) {
            return response.status(400).json({
                message: e.message,
            });
        }
    }

    //Contar Curtidas por Publicação
    async ContarPorPubli_Curtidas(request: Request, response: Response) {
        const { id_publicacao } = request.params;

        const curtidasService = new CurtidaService();

        const list = await curtidasService.ContarPorPubli_Curtidas(id_publicacao);

        return response.json(list);
    }

    //Achar Curtida por Nome e Post
    async AcharPorNomeEPost_Curtidas(request: Request, response: Response) {
        const { id_publicacao, id_usuario } = request.params;

        const curtidasService = new CurtidaService();

        const list = await curtidasService.AcharPorNomeEPost_Curtidas(id_publicacao, id_usuario);

        return response.json(list);
    }

    //Descurtir
    async descurtir(request: Request, response: Response) {
        const { id_publicacao, id_usuario } = request.body;

        const curtidasService = new CurtidaService();

        const curtidas = await curtidasService.descurtir(id_publicacao, id_usuario);

        return response.json(curtidas);
    }
}

export {CurtidasController};