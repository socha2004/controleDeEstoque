import Consumivel from "../models/Consumivel"

class ProdutoController {
    index(req, res) {
       const produto = Consumivel.create(
         {
        nomeConsumivel : "Eugenio", 
        qtdConsumivel : 20,
        localizacaoConsumivel : "CPD",
        codigoBarras : "232324d",
        serialConsumivel : "3434343",
        usuarioCadastro : "Eugenio"
         }
    )
    }
}

export default new ProdutoController()