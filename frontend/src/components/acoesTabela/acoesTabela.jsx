import {Link} from "react-router-dom"
import EditIcon from "../../assets/edit.svg"
import DeleteIcon from "../../assets/delete.svg"
import EyeIcon from "../../assets/eye.svg"

function acoesTabela(props) {
    return (
        <div className="d-flex justify-content-evenly">
            <Link>
                <img src={EyeIcon} className="cardIcons p-1" />
            </Link>
            <Link>
                <img src={EditIcon} className="cardIcons p-1" />
            </Link>
            <img src={DeleteIcon} className="cardIcons p-1" />
        </div>
    )
};

export default acoesTabela;