import {DataTypes} from "@sequelize/core"
import db from "../../config/db.js";


const Ativo = db.define("ativo", {
    idAtivo: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nomeAtivo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    marcaAtivo: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "Genérico"
    },
    serialAtivo: {
        type: DataTypes.STRING,
        allowNull: true
    }
},
{
    tableName: "ativo",
    timestamps: false
}
)

export default Ativo;