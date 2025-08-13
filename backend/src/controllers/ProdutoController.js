let produtos = [
    {id : 1, nome : "Mouse M90"}
]

class ProdutoController {
    index(req, res) {
        return res.json(produtos)
    }
}

export default new ProdutoController()