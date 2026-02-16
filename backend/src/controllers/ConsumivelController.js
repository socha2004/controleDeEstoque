import ConsumivelService from "../services/ConsumivelService";

class ConsumivelController {
   async index(req, res) {
      const consumivel = await ConsumivelService.getConsumivel();
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

   async visualizarProduto(req, res) {
       const id = req.params.id;
       const produto = await Consumivel.findByPk(id)
       console.log(id, produto);
       return res.json(produto)
   }
}

export default new ConsumivelController()