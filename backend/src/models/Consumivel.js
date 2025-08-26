import {Sequelize, DataTypes} from "@sequelize/core";
import db from "../../config/db.js"


const consumivel =  db.define("consumivel", {
    idConsumivel : {
        type : DataTypes.INTEGER.UNSIGNED,
        primaryKey : true,
        autoIncrement : true,
        allowNull: false,
    },
    nomeConsumivel : {
        type: DataTypes.VARCHAR(155),
        allowNull : false
    },
    
})
