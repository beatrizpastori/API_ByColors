import {Request, Response} from "express";
import { PublicacaoService } from "../services/PublicacaoService";

class PublicacaoController {
    async criar_Publicacao (request: Request, response:Response){
        const {id_usuario, id_doenca, conteudo, imagem, denuncias} = request.body;
        const publicacaoService = new PublicacaoService();

        try{
            const publicacao = await publicacaoService.criar_Publicacao({
                id_usuario,
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

    //Listar Publicações
    async listar_Publicacao(request: Request, response: Response) {
        const publicacaoService = new PublicacaoService();

        const publicacao = await publicacaoService.listar_Publicacao();

        return response.json(publicacao);
    }

    //Listar Publicações por Doença
    async listarPorDoenca_Publicacao(request: Request, response: Response) {
        const { id_doenca } = request.params;

        const publicacaoService = new PublicacaoService();

        const publicacao = await publicacaoService.listarPorDoenca_Publicacao(id_doenca);

        return response.json(publicacao);
    }

    //Listar Publicações por Usuário
    async listarPorUsuario_Publicacao(request: Request, response: Response) {
        const { id_usuario } = request.params;

        const publicacaoService = new PublicacaoService();

        const publicacao = await publicacaoService.listarPorUsuario_Publicacao(id_usuario);

        return response.json(publicacao);
    }
}

export {PublicacaoController};