import "primereact/resources/themes/soho-light/theme.css";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState, useEffect } from "react";

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

                <DataTable value={dadosSaida} stripedRows tableStyle={{ minWidth: '50rem' }} size="normal" className="shadow">
                    <Column field="idSaida" sortable header="ID"></Column>
                    <Column field="produtoSaida" header="Produto"></Column>
                    <Column field="usuarioDestino" header="Usuario Destino"></Column>
                    <Column field="localDestino" header="Local"></Column>
                    <Column field="observacaoSaida" header="Observação"></Column>
                </DataTable>
            </div>
        </div>
    )
}

export default Saida