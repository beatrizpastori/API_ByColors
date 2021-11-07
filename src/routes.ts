import { Router } from "express";
import { UsuariosController } from "./controllers/UsuariosController";
import { PublicacaoController } from "./controllers/PublicacaoController";
import { DoencasController } from "./controllers/DoencaController";
import { ContatosController } from "./controllers/ContatosController";
import { CurtidasController } from "./controllers/CurtidasController";
import { MensagemController } from "./controllers/MensagemController";
import { DenunciasController } from "./controllers/DenunciasController";

const routes = Router();

const usuariosController = new UsuariosController();
const publicacaoController = new PublicacaoController();
const doencasController = new DoencasController();
const contatosController = new ContatosController();
const curtidasController = new CurtidasController();
const mensagemController = new MensagemController();
const denunciasController = new DenunciasController();

//Usuários
routes.post("/usuarios", usuariosController.cadastrar_Usuario); //Cadastrar
routes.get("/usuarios", usuariosController.listar_Usuario); //Listar todos
routes.get("/usuarios/?email=:email", usuariosController.acharPorEmail_Usuario); //Achar por email
routes.get("/usuarios/?id_usuario=:id_usuario", usuariosController.acharPorId_Usuario); //Achar por id
routes.put("/usuarios/:id_usuario", usuariosController.atualizar_Usuario); //Atualizar
routes.put("/usuarios/excluir/:id_usuario", usuariosController.excluir_Usuario); //Excluir

//Publicação
routes.post("/publicacao", publicacaoController.criar_Publicacao); //Criar
routes.get("/publicacao", publicacaoController.listar_Publicacao); //Listar todos
routes.get("/publicacao/?id_doenca=:id_doenca", publicacaoController.listarPorDoenca_Publicacao); //Listar por doença
routes.get("/publicacao/?id_usuario=:id_usuario", publicacaoController.listarPorUsuario_Publicacao); //Listar por usuário
routes.get("/publicacao/?id_publicacao=:id_publicacao", publicacaoController.listarPorId_Publicacao); //Listar por id
routes.put("/publicacao/:id_publicacao", publicacaoController.atualizar_Publicacao); //Atualizar
routes.put("/publicacao/excluir/:id_publicacao", publicacaoController.excluir_Publicacao); //Excluir

//Mensagem
routes.post("/mensagem", mensagemController.criar_Mensagem); //Cadastrar
routes.get("/mensagem/?id_doenca=:id_doenca", mensagemController.listarPorDoenca_Mensagem); //Listar por doença

//Doenças
routes.post("/doencas", doencasController.cadastro_doenca); //Cadastrar

//Contatos
routes.post("/contatos", contatosController.cadastro_contato); //Cadastrar

//Curtidas
routes.post("/curtidas", curtidasController.curtir); //Curtir
routes.get("/curtidas/?id_publicacao=:id_publicacao", curtidasController.ContarPorPubli_Curtidas); //Contar Curtidas por Publicação
routes.get("/curtidas/?id_publicacao=:id_publicacao/?id_usuario=:id_usuario", curtidasController.AcharPorNomeEPost_Curtidas); //Contar Curtidas por Publicação
routes.delete("/curtidas", curtidasController.descurtir); //Descurtir

//Denuncias
routes.post("/denuncias", denunciasController.denunciar); //Denunciar
routes.get("/denuncias/?id_publicacao=:id_publicacao", denunciasController.ContarPorPubli_Denuncias); //Contar Denúncias por Publicação

export { routes };