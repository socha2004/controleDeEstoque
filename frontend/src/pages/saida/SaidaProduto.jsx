import { useState, useEffect } from "react"
import Select from "react-select"

function SaidaProduto() {
    const [produtos, setProdutos] = useState([]);
    const [carrinho, setCarrinho] = useState([]);
    const [selecionado, setSelecionado] = useState("");

    const adicionaAoCarrinho = (evento) => {
        
    }
    
    useEffect(() => {
        fetch("http://localhost:9000/produto")
            .then((res) => res.json())
            .then((data) => {
                // adaptando para o formato esperado pelo react-select
                const options = data.map((produto) => ({
                    value: produto.idConsumivel,
                    label: produto.nomeConsumivel,
                    quantidade : produto.qtdConsumivel,
                    marca : produto.marcaConsumivel,
                    modelo : produto.modeloConsumivel,
                    localizacao : produto.localizacaoConsumivel,
                    observacao : produto.observacaoConsumivel
                }));
                setProdutos(options);
            })
            .catch((err) => console.error("Erro:", err));
    }, [])

    
    return (
        <div>
            <nav className="navbar bg-primary shadow">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1 text-light">Emitir Saída</span>
                </div>
            </nav>
            <div className="conteudo-tela shadow">
                <h2 className="text-center">Saída Manual de Material</h2>
                <hr />
                <div>
                    <form onSubmit={adicionaAoCarrinho} style={{ backgroundColor: "#fff", padding: "20px", overflowY: "auto" }} className=" m-2 shadow">
                        <h4>Formulário de saída</h4>
                        <hr />
                        <label ><b>Selecione o produto</b></label>

                        <Select
                            options={produtos}
                            value={selecionado}
                            onChange={setSelecionado}
                            placeholder="Digite ou selecione..."
                            isClearable
                            autoFocus
                        />

                        <div className="row">
                            <div className="col-sm">
                                <label><b>Quantidade atual do material</b></label>
                                <input type="number" className="form-control" disabled value={selecionado?.quantidade || 0}/>
                            </div>
                            <div className="col-sm">
                                <label><b>Quantidade a sair do estoque</b></label>
                                <input type="number" className="form-control" min={0} required />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm">
                                <label><b>Marca</b></label>
                                <input type="text" className="form-control" disabled value={selecionado?.marca || ""}  />
                            </div>
                            <div className="col-sm">
                                <label><b>Modelo</b></label>
                                <input type="text" className="form-control" disabled value={selecionado?.modelo || ""} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm">
                                <label><b>Localização</b></label>
                                <input type="text" className="form-control" disabled value={selecionado?.localizacao || ""} />
                            </div>
                            <div className="col-sm">
                                <label><b>Observação</b></label>
                                <input type="text" className="form-control" disabled value={selecionado?.observacao || ""}/>
                            </div>
                        </div>

                        <h4 className="mt-3">Destino</h4>
                        <hr />

                        <label><b>Informe o nome do Destinatário</b></label>
                        <input type="text" className="form-control" />

                        <div className="row mt-2">
                            <div className="col-sm ">
                                <input type="submit" value="Adicionar ao carrinho" className="btn btn-primary"/>
                            </div>
                        </div>
                       
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SaidaProduto