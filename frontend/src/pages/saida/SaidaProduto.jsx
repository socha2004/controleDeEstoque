function SaidaProduto() {
    return (
        <div>
            <nav className="navbar bg-primary shadow">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1 text-light">Emitir Saída</span>
                </div>
            </nav>
            <div className="conteudo-tela shadow">
                <h2 className="text-center">Saída de Material</h2>
                <hr />
                <div>
                    <form  style={{ backgroundColor: "#fff", padding: "20px", overflowY: "auto" }} className=" m-2 shadow">
                        <h3>Formulário de saída</h3>
                        <hr />
                        <label ><b>Selecione o produto</b></label>
                        <select className="form-control mb-3" >
                            <option value="Teste">Teste</option>
                            <option value="Teste">Teste</option>
                            <option value="Teste">Teste</option>
                            <option value="Teste">Teste</option>
                            <option value="Teste">Teste</option>
                            <option value="Teste">Teste</option>
                            <option value="Teste">Teste</option>
                            <option value="Teste">Teste</option>
                            <option value="Teste">Teste</option>
                            <option value="Teste">Teste</option>
                            <option value="Teste">Teste</option>
                            <option value="Teste">Teste</option>
                            <option value="Teste">Teste</option>
                        </select>
                        <div className="row">
                            <div className="col-sm">
                                <label><b>Quantidade atual do material</b></label>
                                <input type="number" className="form-control" disabled/>
                            </div>
                            <div className="col-sm">
                                <label><b>Quantidade a sair do estoque</b></label>
                                <input type="number" className="form-control" min={0}/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm">
                                <label><b>Marca</b></label>
                                <input type="text" className="form-control" disabled/>
                            </div>
                            <div className="col-sm">
                                <label><b>Modelo</b></label>
                                <input type="text" className="form-control" disabled/>
                            </div>
                        </div>

                         <div className="row">
                            <div className="col-sm">
                                <label><b>Localização</b></label>
                                <input type="text" className="form-control" disabled/>
                            </div>
                            <div className="col-sm">
                                <label><b>Observação</b></label>
                                <input type="text" className="form-control" disabled/>
                            </div>
                        </div>
                    
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SaidaProduto