import { useEffect, useState } from "react"
import EditIcon from "../../assets/edit.svg"
import DeleteIcon from "../../assets/delete.svg"

function Produtos() {
    document.title = "Produtos"

    const [dados, setDados] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/produto")
            // .then((res) => res.json())
            .then((data) => setDados(data))
            .catch((err) => console.error("Erro ao buscar dados:", err));
    }, []);
    console.log(dados);
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
                <table className="table table-hover shadow">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Produto</th>
                            <th scope="col">Qtd. Em estoque</th>
                            <th scope="col">Marca</th>
                            <th scope="col">Modelo</th>
                            <th scope="col">Localização</th>
                            <th scope="col">Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dados.map((item) => (
                            <tr>
                                <td className="border px-4 py-2">{item}</td>
                                <td className="border px-4 py-2">{item.nomeConsumivel}</td>
                                <td className="border px-4 py-2">{item.qtdConsumivel}</td>
                                <td className="border px-4 py-2">{item.marcaConsumivel}</td>
                                <td className="border px-4 py-2">{item.modeloConsumivel}</td>
                                <td className="border px-4 py-2">{item.localizacaoConsumivel}</td>
                            </tr>
                            
                        ))}
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Produtos