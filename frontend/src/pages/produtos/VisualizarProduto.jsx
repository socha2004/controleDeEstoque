import { useState, useEffect } from "react"

function editarProduto () {
    const [produto, setProduto] = useState([]);
    console.log(produto)
    useEffect(() => {
        fetch("http://localhost:9000/visualizarproduto/2")
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
                    <p>Nome do Produto</p>
                </div>
            </div>
        </div>
    )
}

export default editarProduto