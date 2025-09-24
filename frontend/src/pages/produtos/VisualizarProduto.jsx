import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

function visualizarProduto() {
    const [produto, setProduto] = useState([]);
    const {idProduto} = useParams();
    console.log(produto)
    useEffect(() => {
        fetch(`http://localhost:9000/visualizarproduto/${idProduto}`)
            .then((res) => res.json())
            .then((produto) => setProduto(produto))
            .catch((err) => console.error("Erro ao buscar dados:", err));
    }, [])

    return (
        <div>
            <nav className="navbar bg-primary shadow">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1 text-light">Visualizar Produto</span>
                </div>
            </nav>
            <div className="conteudo-tela shadow">
                <h3>Detalhes do Produto</h3>
                <hr />
                <div>
                    <form style={{ backgroundColor: "#fff", padding: "10px", overflowY: "auto" }} className="p-2 m-2 shadow">
                        <h4>Formulário de cadastro</h4>
                        <hr />

                        <label className="form-label"><b>Nome do produto</b></label>
                        <input type="text" name="nomeConsumivel" value={produto.nomeConsumivel} disabled className="form-control" />

                        <label className="form-label"><b>Quantidade em estoque</b></label>
                        <input type="number" className="form-control" name="qtdConsumivel" disabled value={produto.qtdConsumivel} />

                        <label htmlFor="" className="form-label"><b>Marca</b></label>
                        <input type="text" className="form-control" disabled value={produto.marcaConsumivel} />

                        <label htmlFor="" className="form-label"><b>Modelo</b></label>
                        <input type="text" className="form-control" disabled value={produto.modeloConsumivel} />

                        <label htmlFor="" className="form-label"><b>Localização</b></label>
                        <input className="form-select" aria-label="Default select example" disabled value={produto.localizacaoConsumivel} />
                        
                        <label htmlFor="" className="form-label"><b>Código de barras</b></label>
                        <input type="text" disabled className="form-control" value={produto.codigoBarras} />

                        <label htmlFor="" className="form-label"><b>Observação</b></label>
                        <textarea className="form-control" disabled rows="3" value={produto.observacaoProduto} />

                    </form>
                </div>
            </div>
        </div>
    )
}

export default visualizarProduto