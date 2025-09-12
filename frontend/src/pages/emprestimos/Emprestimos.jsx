import ClockIcon from "../../assets/clock.svg"

function Emprestimos() {
    document.title = "Registro de Emprestimos"
    return (
        <div>
            <nav className="navbar bg-primary shadow">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1 text-light">Registro de Empréstimos</span>
                </div>
            </nav>
            <div className="conteudo-tela shadow">
                <h3>Relatório de Empréstimos</h3>
                <hr />
                 <button className="btn btn-warning shadow m-1 text-white"> <img src={ClockIcon} className="cardIcons p-1" /> Emitir Empréstimo</button>
            </div>
        </div>
    )
}

export default Emprestimos