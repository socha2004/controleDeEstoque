import Consumivel from "../models/Consumivel"

class ProdutoController {
   async index(req, res) {
      const consumivel = await Consumivel.findAll();
      return res.json(consumivel);
   }

   async totalProdutos(req, res) {
      const totalProdutos = await Consumivel.findAll();
      return res.send(totalProdutos);
   }

   async novoProduto(req, res) {
      const retornoJson = req.body;
      const novoProduto = await Consumivel.create(
         {
            nomeConsumivel : retornoJson.nomeConsumivel,
            qtdConsumivel : retornoJson.qtdConsumivel,
            marcaConsumivel : retornoJson.marcaConsumivel,
            modeloConsumivel : retornoJson.json,
            localizacaoConsumivel : retornoJson.localizacaoConsumivel,
            codigoBarras : retornoJson.codigoBarras,
            serialConsumivel : retornoJson.serialConsumivel || "default",
            observacaoConsumivel : retornoJson.observacaoConsumivel,
            imagemConsumivel : retornoJson.imagemConsumivel || "default",
            idUsuario : 1
         }
      )
   }

   async totalProdutos(req, res) {
      const totalConsumivel = await Consumivel.count();
      return totalConsumivel;
   }

   async deletarProduto(req, res) {
       
   }

}

export default new ProdutoController()