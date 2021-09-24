import {Request, Response} from "express";
import { DoencasService } from "../services/DoencaService";


class DoencasController {
    async cadastro_doenca (request: Request, response:Response){
        const {id_mes, nome_doenca, nome_mes, definicao, estatisticas, aumenta_risco, prevencao, sintomas, deteccao, diagnostico, tratamento, ordem} = request.body;
        const doencasService = new DoencasService();

        try{
            const doencas = await doencasService.cadastro_doenca({
                id_mes, 
                nome_doenca, 
                nome_mes, 
                definicao, 
                estatisticas, 
                aumenta_risco, 
                prevencao, 
                sintomas, 
                deteccao, 
                diagnostico, 
                tratamento, 
                ordem
            });

            return response.json(doencas);
        }
        catch(e) {
            return response.status(400).json({
                message: e.message,
            });
        }
    }
}

export {DoencasController};