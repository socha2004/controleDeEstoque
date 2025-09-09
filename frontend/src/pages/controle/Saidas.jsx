import "primereact/resources/themes/lara-light-cyan/theme.css";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState, useEffect } from "react";

function Saida() {
    document.title = "Saidas de Material"

    const [dadosSaida, setDadosSaida] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9000/produto")
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

                <DataTable value={dadosSaida} showGridlines tableStyle={{ minWidth: '50rem' }}>
                    <Column field="nomeConsumivel" header="Nome"></Column>
                    <Column field="qtdConsumivel" header="Nome"></Column>
                    <Column field="marcaConsumivel" header="Nome"></Column>
                    <Column field="modeloConsumivel" header="Nome"></Column>
                </DataTable>
            </div>
        </div>
    )
}

export default Saida