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
    nomeConsumivel: {
        type: DataTypes.STRING,
        allowNull: false
    },
    qtdConsumivel: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    marcaConsumivel: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "Genérico"
    },
    modeloConsumivel: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "Universal"
    },
    localizacaoConsumivel: {
        type: DataTypes.STRING,
        allowNull: true
    },
    codigoBarras: {
        type: DataTypes.STRING,
        allowNull: true
    },
    serialConsumivel: {
        type: DataTypes.STRING,
        allowNull: true
    },
    observacaoConsumivel: {
        type: DataTypes.STRING,
        allowNull: true
    },
    imagemConsumivel: {
        type: DataTypes.BLOB,
        allowNull: true
    },
    idUsuario: {
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

Usuario.hasMany(Consumivel, {foreignKey : "idUsuario"})
Consumivel.belongsTo(Usuario, {foreignKey : "idUsuario"})

export default Consumivel;