import { useEffect, useState } from "react"
import EditIcon from "../../assets/edit.svg"
import DeleteIcon from "../../assets/delete.svg"

function Produtos() {
    document.title = "Produtos"

    const [dados, setDados] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9000/produto")
            .then((res) => res.json())
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
                <table className="table table-hover table-bordered shadow">
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
                                <td>{item.idConsumivel}</td>
                                <td>{item.nomeConsumivel}</td>
                                <td>{item.qtdConsumivel}</td>
                                <td>{item.marcaConsumivel}</td>
                                <td>{item.modeloConsumivel}</td>
                                <td>{item.localizacaoConsumivel}</td>
                                <td className="d-flex justify-content-around">
                                    <img src={EditIcon} className="cardIcons p-1" /> 
                                    <img src={DeleteIcon} className="cardIcons p-1" />
                                </td>
                            </tr>

                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Produtos