import "../CarrinhoSaida/CarrinhoSaida.css"

function CarrinhoSaida(props) {
    return (
        <div className="carrinho shadow">
            <h3 className="text-center">Carrinho</h3>
            <hr />
            <div className="d-flex flex-column content">
                <div className="itens-area">
                    <p>2 - Mouse M90</p>
                </div>
                <div className="acoes-area">
                    <button className="btn btn-success">Registrar Saída</button>
                    <button className="btn btn-danger">Limpar Lista</button>
                </div>
            </div>
        </div>
    )
}

export default CarrinhoSaida