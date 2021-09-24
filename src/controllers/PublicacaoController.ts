import {Request, Response} from "express";
import { PublicacaoService } from "../services/PublicacaoService";


class PublicacaoController {
    async criar_publicacao (request: Request, response:Response){
        const {id_user, id_doenca, conteudo, imagem, denuncias} = request.body;
        const publicacaoService = new PublicacaoService();

        try{
            const publicacao = await publicacaoService.criar_publicacao({
                id_user,
                id_doenca,
                conteudo,
                imagem,
                denuncias
            });

            return response.json(publicacao);
        }
        catch(e) {
            return response.status(400).json({
                message: e.message,
            });
        }
    }

    //Achar publicação por conteúdo
    async achar_publi(request: Request, response: Response) {
        const { conteudo } = request.params;

        const publicacaoService = new PublicacaoService();

        const publicacao = await publicacaoService.achar_publi(conteudo);

        return response.json(publicacao);
    }
}

export {PublicacaoController};