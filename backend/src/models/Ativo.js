import { DataTypes, HasOneAssociation } from "@sequelize/core"
import db from "../../config/db.js";
import Usuario from "./Usuario.js"

const Ativo = db.define("ativo", {
    idAtivo: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    tipoAtivo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    marcaAtivo: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "Genérico"
    },
    modeloAtivo: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Padrão"
    },
    serialAtivo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    inventarioAtivo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    apelidoAtivo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    observacaoAtivo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    statusAtivo: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Em estoque"
    }
},
    {
        tableName: "ativo",
        timestamps: false
    }
)

Usuario.hasMany(Ativo, {foreignKey : ""})

export default Ativo;