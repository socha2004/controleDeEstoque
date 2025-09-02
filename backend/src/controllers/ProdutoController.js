import Consumivel from "../models/Consumivel"

class ProdutoController {
   async index(req, res) {
      const consumivel = await Consumivel.findAll();
      return res.json(consumivel);
   }

   async novoProduto(req, res) {

   }

   async totalProdutos(req, res) {
      const totalConsumivel = await Consumivel.count();
      return totalConsumivel;
   }

}

export default new ProdutoController()