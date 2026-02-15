import {Router} from "express";
import consumivelController from "./src/controllers/ConsumivelController"
import ativoController from "./src/controllers/AtivoController"

const routes = new Router();

routes.get("/produto", consumivelController.index)
routes.get("/totalConsumiveis", consumivelController.totalProdutos)
routes.post("/produto", consumivelController.novoProduto)
routes.get("/visualizarProduto/:id", consumivelController.visualizarProduto)

routes.get("/ativo", ativoController.index)

export default routes;