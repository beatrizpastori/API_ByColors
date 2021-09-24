import { Router } from "express";
import { UsuariosController } from "./controllers/UsuariosController";
import { PublicacaoController } from "./controllers/PublicacaoController";
import { DoencasController } from "./controllers/DoencaController";
import { ContatosController } from "./controllers/ContatosController";
import { CurtidasController } from "./controllers/CurtidasController";
import { MensagemController } from "./controllers/MensagemController";

const routes = Router();

const usuariosController = new UsuariosController();
const publicacaoController = new PublicacaoController();
const doencasController = new DoencasController();
const contatosController = new ContatosController();
const curtidasController = new CurtidasController();
const mensagemController = new MensagemController();

//Usuários
routes.post("/usuarios", usuariosController.cadastrar_Usuario);
routes.get("/usuarios/:nome_usuario", usuariosController.acharPorNome_Usuario);
//routes.put("/usuarios/:nome_usuario", usuariosController.atualizar);

//Publicação
routes.post("/publicacao", publicacaoController.criar_publicacao);
routes.get("/usuarios/:conteudo", publicacaoController.achar_publi);

//Doenças
routes.post("/doencas", doencasController.cadastro_doenca);

//Contatos
routes.post("/contatos", contatosController.cadastro_contato);

//Curtidas
routes.post("/curtidas", curtidasController.curtir);

//Mensagem
routes.post("/mensagem", mensagemController.enviar_mensagem);


export { routes };