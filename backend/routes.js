import {Router} from "express";
import produtoController from "./src/controllers/ProdutoController"
import ativoController from "./src/controllers/AtivoController"
import saidaController from "./src/controllers/SaidaController"

const routes = new Router();

routes.get("/produto", produtoController.index)
routes.get("/totalConsumiveis", produtoController.totalProdutos)
routes.post("/produto", produtoController.novoProduto)
routes.get("/visualizarProduto/:id", produtoController.visualizarProduto)

routes.get("/saida", saidaController.index)

routes.get("/ativo", ativoController.index)

export default routes;