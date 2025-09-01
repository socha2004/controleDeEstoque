import EditIcon from "../../assets/edit.svg"
import DeleteIcon from "../../assets/delete.svg"

function Produtos() {
    document.title = "Produtos"

    const mockProdutos = [
        {
            id : 1,
            nome : "Mouse com fio",
            qtd : 45,
            marca : "Logitech",
            modelo : "M90",
            localizacao : "CPD"
        }
    ]

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
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>
                                <img src={EditIcon} className="cardIcons p-1"/>
                                <img src={DeleteIcon} className="cardIcons p-1"/>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>
                                <img src={EditIcon} className="cardIcons p-1"/>
                                <img src={DeleteIcon} className="cardIcons p-1"/>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>
                                <img src={EditIcon} className="cardIcons p-1"/>
                                <img src={DeleteIcon} className="cardIcons p-1"/>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Produtos