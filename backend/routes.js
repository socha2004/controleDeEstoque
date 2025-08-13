import {Router} from "express";
import produto from "./src/controllers/ProdutoController"

const routes = new Router();

routes.get("/produto", produto.index)

export default routes;