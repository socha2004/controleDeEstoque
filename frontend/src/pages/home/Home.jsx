import "./Home.css"
import MouseIcon from "../../assets/mouse.svg"

function Home() {
    document.title = "Controle de Estoque"
    return (
        <div>
            <nav className="navbar bg-primary shadow">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1 text-light ">Tela Inicial</span>
                </div>
            </nav>
            <div className="conteudo-home shadow">
                <h3>Resumo de Estoque</h3>
                <hr/>
                <br/>
                <div className="cards">
                    <div className="card p-2 bg-danger-subtle shadow">
                        <img src={MouseIcon} className="cardIcons" />
                        <h5>Total de Insumos</h5>
                        <span>58</span>
                    </div>
                    <div className="card p-2 bg-primary-subtle shadow">
                        <i className=""></i>
                        <h5>Total de Ativos</h5>
                        <span>58</span>
                    </div>
                    <div className="card p-2 bg-success-subtle shadow">
                        <h5>Total de Saídas</h5>
                        <span>58</span>
                    </div>
                    <div className="card p-2 bg-info-subtle shadow">
                        <h5>Total de Emprestimos</h5>
                        <span>58</span>
                    </div>
                </div>
                <br/>
                <h3>Dashboard</h3>
                <hr/>
            </div>
        </div>
    )
}

export default Home