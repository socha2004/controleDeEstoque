import { DataTypes, HasOneAssociation } from "@sequelize/core"
import db from "../../config/db.js";
import Consumivel from "./Consumivel.js";
import Usuario from "./Usuario.js"

const Saida = db.define("Saida",
    {
        idSaida: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        produtoSaida: {
            type: DataTypes.STRING,
            allowNull: false
        },
        usuarioDestino: {
            type: DataTypes.STRING,
            allowNull: false
        },
        localDestino: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Escritorio"
        },
        telefoneDestino : {          
            type : DataTypes.STRING,                                                       
            allowNull: true                                                       
        },                                                       
        emailDestino : {                                                       
            type: DataTypes.STRING,                                                       
            allowNull: true                                                       
        },                                                       
        emprestimo : {                                                       
            type : DataTypes.BOOLEAN,                                                       
            allowNull : true                                                       
        },                                                       
        prazoEmprestimo : {                                                       
            type : DataTypes.DATE,                                                       
            allowNull: true                                                       
        },                                                       
        observacaoSaida : {                                                       
            type: DataTypes.STRING,                                                       
            allowNull: true                                                       
        }                                                       
    },                                                       
    {                                                       
        tableName: "saidas",                                                       
        timestamps: false
    }
)

Usuario.hasMany(Saida, {foreignKey: "idUsuario"});
Saida.belongsTo(Usuario, {foreignKey : "idUsuario"});

Consumivel.hasMany(Saida, {foreignKey: "idConsumivel"});
Saida.belongsTo(Consumivel, {foreignKey: "idConsumivel"});

export default Saida;