import Consumivel from "../models/Consumivel"

class ProdutoController {
    index(req, res) {
       const consumivel = Consumivel.findAll();
       console.log("Produtos em estoque: ", JSON.stringify(consumivel, null, 2));
    }
    novoProduto(req, res) {
      
    }
}

export default new ProdutoController()