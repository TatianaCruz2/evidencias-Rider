import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

 export const Taks = sequelize.define('Taks',{
   id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
   },
   name:{
    type:DataTypes.STRING
   },
   done:{
    type: DataTypes.BOOLEAN,
    defaultValue: false
   },
}, {
    timestamps: false
})