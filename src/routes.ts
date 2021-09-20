import { Router } from "express";
import { UsuariosController } from "./controllers/UsuariosController";

const routes = Router();

const usuariosController = new UsuariosController();

routes.post("/usuarios", usuariosController.cadastrar_Usuario);
routes.get("/usuarios/:nome_usuario", usuariosController.acharPorNome_Usuario);
//routes.put("/usuarios/:nome_usuario", usuariosController.atualizar);

export { routes };