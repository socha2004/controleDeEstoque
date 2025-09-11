import "./SideBar.css"
import { useState, useRef } from "react"
import { Link } from "react-router-dom"

import InventoryIcon from "../../assets/inventory.svg"
import HomeIcon from "../../assets/home.svg"
import ClipBoardIcon from "../../assets/clipboard.svg"
import UserIcon from "../../assets/user.svg"
import RoleIcon from "../../assets/setting.svg"

import { CSSTransition } from "react-transition-group"


function SideBar(props) {
    const [openProdutos, setOpenProdutos] = useState(false);
    const [openControle, setOpenControle] = useState(false);

    const nodeRef = useRef(null);

    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 sidebar text-bg-dark shadow-lg" style={{ width: '250px', height: '100vh', backgroundColor: '#4975F0', position: "fixed" }}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-4">Controle de Estoque - Nansen</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item ">
                    <Link to="/" className="temp nav-link link-light d-flex border-bottom tab-link">
                        <img src={HomeIcon} className="icons ml-2" />
                        Página Inicial
                    </Link>
                </li>
                <li className="nav-item">
                    <div className="nav-link tab-link link-light d-flex border-bottom" onClick={() => setOpenProdutos(!openProdutos)} aria-expanded={openProdutos}>
                        <img src={InventoryIcon} className="icons ml-2" />
                        Produtos
                    </div>
                    <CSSTransition
                        in={openProdutos}
                        timeout={300}
                        classNames="collapse"
                        nodeRef={nodeRef}
                        unmountOnExit
                    >
                        <ul ref={nodeRef} className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><Link to="/produtos" className="link-light d-block ps-4 tab-link">Listar</Link></li>
                            <li><Link to="/cadastrarProdutos" className="link-light d-block ps-4 tab-link">Entrada</Link></li>
                        </ul>
                    </CSSTransition>
                </li>
                <li className="nav-item">
                    <div className="nav-link tab-link link-light d-flex border-bottom" onClick={() => setOpenControle(!openControle)} aria-expanded={openControle}>
                        <img src={ClipBoardIcon} className="icons ml-2" />
                        Operações
                    </div>
                    <CSSTransition
                        in={openControle}
                        timeout={200}
                        classNames="collapse"
                        nodeRef={nodeRef}
                        unmountOnExit
                    >
                        <ul ref={nodeRef} className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><Link to="/saidas" className="link-light d-block ps-4 tab-link">Saídas</Link></li>
                            <li><Link to="/emprestimos" className="link-light d-block ps-4 tab-link">Empréstimos</Link></li>
                        </ul>
                    </CSSTransition>
                </li>
            </ul>
            <div className="d-flex flex-column">
                <div className="m-1">
                    <img src={UserIcon} className="icons ml-2 " />
                    <span>Usuário: {props.user.name}</span>
                </div>
                <hr />      
                <div className="m-1">
                    <img src={RoleIcon} className="icons ml-2 " />
                    <span>Função: {props.user.role}</span>
                </div>
                
            </div>
            <hr />
            <button className="btn btn-danger">
                Sair
            </button>
        </div>
    )
}

export default SideBar