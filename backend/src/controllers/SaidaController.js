import Saida from "../models/Saida"

class SaidaController {
    async index (req, res) {
        const saidas = await Saida.findAll()
        res.json(saidas)
    }
}

export default new SaidaController()