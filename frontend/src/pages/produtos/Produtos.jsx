import { useEffect, useState } from "react"
import { DataTable } from "primereact/datatable"
import { Column } from "primereact/column"
import {Link} from 'react-router-dom'
import EyeIcon from "../../assets/eye.svg"

function Produtos() {
    document.title = "Produtos"
    const [dados, setDados] = useState([]);
    const [idProduto, setIdProduoto] = useState("");

    const linkTemplate = (dados) => {
        return (
            <Link to={`/editarProduto/${dados.idConsumivel}`}>
                <img src={EyeIcon} className="cardIcons p-1" />
            </Link>
        )
    }

    useEffect(() => {
        fetch("http://localhost:9000/produto")
            .then((res) => res.json())
            .then((data) => setDados(data))
            .catch((err) => console.error("Erro ao buscar dados:", err));
    }, [dados]);

    return (
        <div>
            <nav className="navbar bg-primary shadow">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1 text-light">Produtos em Estoque</span>
                </div>
            </nav>
            <div className="conteudo-tela shadow">
                <h3>Itens atuais</h3>
                <hr />
                <div className="d-flex ">
                    <input className="form-control mb-2 me-2 " type="search" placeholder="Pesquisar produto" style={{ width: "170px" }} aria-label="Search" />
                    <select name="" id="" className="btn btn-primay mb-2 me-2 bg-primary text-white text-start">
                        <option selected>Filtro</option>
                        <option value="Nome">Nome</option>
                        <option value="Marca">Marca</option>
                        <option value="Modelo">Modelo</option>
                        <option value="NF">NF</option>
                    </select>
                    <div className="dropdown">
                        <button className="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Exportar
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdown">
                            <li><a className="dropdown-item">XLSX</a></li>
                        </ul>
                    </div>
                </div>
                <DataTable value={dados} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} rowHover stripedRows size="large" tableStyle={{ minWidth: '50rem' }} className="shadow">
                    <Column field="idConsumivel" header="ID" className="p-2"></Column>
                    <Column field="nomeConsumivel" header="Produto"></Column>
                    <Column field="qtdConsumivel" sortable header="Qtd. Em estoque"></Column>
                    <Column field="marcaConsumivel" sortable header="Marca"></Column>
                    <Column field="modeloConsumivel" header="Modelo"></Column>
                    <Column field="localizacaoConsumivel" header="Localização"></Column>
                    <Column header="Ação" body={linkTemplate(dados)}></Column>
                </DataTable>
            </div>
        </div>
    )
}

export default Produtos