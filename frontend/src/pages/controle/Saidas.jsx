import "primereact/resources/themes/soho-light/theme.css";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState, useEffect } from "react";
import CardIcon from "../../assets/cart.svg"

function Saida() {
    document.title = "Saidas de Material"

    const [dadosSaida, setDadosSaida] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9000/saida")
            .then((res) => res.json())
            .then((data) => setDadosSaida(data))
            .catch((err) => console.error("Erro ao buscar dados:", err));
    }, [])
    
    console.log(dadosSaida);

    return (
         <div>
            <nav className="navbar bg-primary shadow">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1 text-light">Registro de Saídas</span>
                </div>
            </nav>
            <div className="conteudo-tela shadow">
                <h3>Relatório de saídas</h3>
                <hr/>
                    <button className="btn btn-danger shadow m-1"> <img src={CardIcon} className="cardIcons p-1" /> Emitir Saída</button>
                <table className="table table-hover table-bordered shadow mt-3">
                    <thead>
                        <tr>
                            <th>ID Saída</th>
                            <th>Usuário</th>
                            <th>Local</th>
                            <th>Data de Saída</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}

export default Saida