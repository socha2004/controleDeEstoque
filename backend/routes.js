import {Router} from "express";
import produto from "./src/controllers/ProdutoController"
import ativoController from "./src/controllers/AtivoController"

const routes = new Router();

routes.get("/produto", produto.index)
routes.get("/ativo", ativoController.index)

export default routes;