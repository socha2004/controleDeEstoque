import { useEffect, useState } from "react"
import EditIcon from "../../assets/edit.svg"
import DeleteIcon from "../../assets/delete.svg"


function Produtos() {
    document.title = "Produtos"
    const [dados, setDados] = useState([]);
    const [recarrega, setRecarrega] = useState(false);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch("http://localhost:9000/produto")
            .then((res) => res.json())
            .then((data) => setDados(data))
            .catch((err) => console.error("Erro ao buscar dados:", err));
    }, [dados]);
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
                <div className="d-flex justify-content-right m-1 align-items-center">
                    <div className="card rounded-4 p-1 mr-3 bg-primary-subtle">
                        <h6>Nova Saida</h6>
                    </div>
                    <div className="card rounded-4 p-1 bg-danger-subtle">
                        <h6>Novo Empréstimo</h6>
                    </div>
                </div>
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