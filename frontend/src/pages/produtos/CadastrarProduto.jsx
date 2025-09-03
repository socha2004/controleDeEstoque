import { useState, useEffect } from "react"

function CadastrarProdutos() {
    document.title = "Novo produto"

    const [nomeConsumivel, setNomeConsumivel] = useState("");
    const [qtdConsumivel, setQtdConsumivel] = useState(0);
    const [marcaConsumivel, setMarcaConsumivel] = useState("");
    const [modeloConsumivel, setModeloConsumivel] = useState("");
    const [localizacaoConsumivel, setLocalizacaoConsumivel] = useState("");
    const [codigoBarras, setCodigoBarras] = useState("");
    const [observacao, setObservacao] = useState("");

    const envioFormulario = (evento) => {
        evento.preventDefault();
        const novoConsumivel = {
            nomeConsumivel : nomeConsumivel,
            qtdConsumivel : qtdConsumivel,
            marcaConsumivel : marcaConsumivel,
            modeloConsumivel : modeloConsumivel,
            localizacaoConsumivel : localizacaoConsumivel,
            codigoBarras : codigoBarras,
            observacao : observacao
        };
        fetch("http://localhost:9000/produto", {
            method: "POST",
            headers : {
                "Content-type" : "Application/JSON",
            },
            body : JSON.stringify(novoConsumivel),
        })
        .then((response) => response.json())
        .then((resetConsumivel) => {
            setNomeConsumivel("");
            setQtdConsumivel(0);
            setMarcaConsumivel("");
            setModeloConsumivel("");
            setLocalizacaoConsumivel("");
            setCodigoBarras("");
            setObservacao("");    
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return (
        <div>
            <nav className="navbar bg-primary shadow">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1 text-light">Cadastrar Produto</span>
                </div>
            </nav>
            <div className="conteudo-tela shadow">
                <h2 className="text-center">Novo Produto</h2>
                <hr />
                <form onSubmit={envioFormulario} style={{ backgroundColor: "#fff", padding: "10px", overflowY: "auto" }} className="p-2 m-2 shadow">
                    <h4>Formulário de cadastro</h4>
                    <hr />

                    <label className="form-label"><b>Nome do produto</b></label>
                    <input type="text" name="nomeConsumivel" value={nomeConsumivel} onChange={(event) => setNomeConsumivel(event.target.value)} className="form-control" />

                    <label className="form-label"><b>Quantidade em estoque</b></label>
                    <input type="number" className="form-control" name="qtdConsumivel" value={qtdConsumivel} onChange={(event) => setQtdConsumivel(event.target.value)}/>

                    <label htmlFor="" className="form-label"><b>Marca</b></label>
                    <input type="text" className="form-control" value={marcaConsumivel} onChange={(event) => setMarcaConsumivel(event.target.value)}/>

                    <label htmlFor="" className="form-label"><b>Modelo</b></label>
                    <input type="text" className="form-control" value={modeloConsumivel} onChange={(event) => setModeloConsumivel(event.target.value)}/>

                    <label htmlFor="" className="form-label"><b>Localização</b></label>
                    <select className="form-select" aria-label="Default select example" value={localizacaoConsumivel} onChange={(event) => setLocalizacaoConsumivel(event.target.value)}>
                        <option selected>Escolha</option>
                        <option value="1">CPD</option>
                        <option value="2">Administração</option>
                        <option value="3">Armário</option>
                    </select>

                    <label htmlFor="" className="form-label"><b>Código de barras</b></label>
                    <input type="text" className="form-control" value={codigoBarras} onChange={(event) => setCodigoBarras(event.target.value)}/>

                    <label htmlFor="" className="form-label"><b>Observação</b></label>
                    <textarea className="form-control" rows="3" onChange={(event) => setObservacao(event.target.value)}/>

                    <button className="btn btn-primary" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}

export default CadastrarProdutos