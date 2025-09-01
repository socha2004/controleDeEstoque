import { DataTypes, HasOneAssociation } from "@sequelize/core"
import db from "../../config/db.js";

const Usuario = db.define("Usuario", {
    idUsuario: {
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nomeUsuario: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    loginUsuario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senhaUsuario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    roleUsuario: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
    {
        tableName: "usuario",
        timestamps: false
    }
)

export default Usuario;