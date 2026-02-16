import { Sequelize, DataTypes } from "@sequelize/core";
import db from "../../config/db.js";
import Usuario from "./Usuario.js"

const Consumivel = db.define("consumivel", {
    idConsumivel: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    modelo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    marca: {
        type: DataTypes.STRING,
        allowNull: true
    },
    codBarras: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "Genérico"
    },
    fornecedor: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "Universal"
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: true
    },
    reservado: {
        type: DataTypes.STRING,
        allowNull: true
    },
    local: {
        type: DataTypes.STRING,
        allowNull: true
    },
    proprietario: {
        type: DataTypes.STRING,
        allowNull: true
    },
    idMovimentacao: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    movimentacao_idMovimentacao: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 10
    }
},
    {
        tableName: "consumivel",
        timestamps: false
    }
)

// Usuario.hasMany(Consumivel, { foreignKey: "idUsuario" })
// Consumivel.belongsTo(Usuario, { foreignKey: "idUsuario" })

export default Consumivel;