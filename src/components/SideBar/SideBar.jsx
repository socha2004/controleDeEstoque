import "./SideBar.css"
import {Link} from "react-router-dom"

function SideBar() {
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 sidebar text-bg-dark shadow-lg" style={{ width: '250px', height: '100vh', backgroundColor: '#4975F0' }}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-4">Controle de Estoque - Nansen</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item nav-link">
                    <Link to="/" className="tab-link" aria-current="page">
                        Página Inicial
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/produtos" className="nav-link">
                        Produtos
                    </Link>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                        Controle
                    </a>
                </li>
            </ul>
            <hr />
            <div className="dropdown">
                <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown">
                    <strong>Usuário</strong>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                    <li><a className="dropdown-item" href="#">Perfil</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Sair</a></li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar