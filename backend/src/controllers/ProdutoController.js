import Consumivel from "../models/Consumivel"

class ProdutoController {
    async index(req, res) {
       const consumivel = await Consumivel.findAll();
    //    console.log("Produtos em estoque: ", JSON.stringify(consumivel));
       return res.json(consumivel);
    }
    async novoProduto(req, res) {
      
    }
}

export default new ProdutoController()