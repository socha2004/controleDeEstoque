import Ativo from "../models/Ativo"

class AtivoController {
    index(req, res) {
        const ativo = Ativo.create(
            {
                nomeAtivo : "Impressora",
                marcaAtivo : "Hewlett Packard",
                serialAtivo : "aqwert"
            }
        )
    }
}

export default new AtivoController();