import "./Home.css"
import { useEffect, useState } from "react"
import MouseIcon from "../../assets/mouse.svg"
import DesktopIcon from "../../assets/desktop.svg"
import CartIcon from "../../assets/cart-home.svg"
import SyncIcon from "../../assets/sync.svg"

function Home() {
    document.title = "Controle de Estoque"

    const [totalConsumivel, setTotalConsumivel] = useState(0);

    useEffect(() => {
        fetch("http://localhost:9000/totalConsumiveis")
        .then(setTotalConsumivel())
    })

    return (
        <div>
            <nav className="navbar bg-primary shadow">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1 text-light ">Tela Inicial</span>
                </div>
            </nav>
            <div className="conteudo-tela shadow">
                <h3>Resumo de Estoque</h3>
                <hr/>
                <br/>
                <div className="cards">
                    <div className="card p-3 bg-danger-subtle shadow rounded-4">
                        <img src={MouseIcon} className="cardIcons" />
                        <h5>Total de Insumos</h5>
                        <h5>58</h5>
                    </div>
                    <div className="card p-3 bg-primary-subtle shadow rounded-4">
                        <img src={DesktopIcon} className="cardIcons" />
                        <h5>Total de Ativos</h5>
                        <h5>58</h5>
                    </div>
                    <div className="card p-3 bg-success-subtle shadow rounded-4">
                        <img src={CartIcon} className="cardIcons" />
                        <h5>Total de Saídas</h5>
                        <h5>58</h5>
                    </div>
                    <div className="card p-3 bg-info-subtle shadow rounded-4">
                         <img src={SyncIcon} className="cardIcons" />
                        <h5>Total de Emprestimos</h5>
                        <h5>58</h5>
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