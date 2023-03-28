import { DataTypes } from "sequelize";
import { sequelize} from "../database/database.js";
import {Taks} from './Taks.js'
export const proyecto = sequelize.define("proyecto", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    priority: {
        type: DataTypes.INTEGER
    },
    description: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.BOOLEAN
    },

},{
    timestamps: true
});

proyecto.hasMany(Taks,{
    foreignKey: 'projectId',
    sourceKey: 'id',
});
Taks.belongsTo(proyecto,{
    foreignKey: 'projectId',
    targetId: 'id'
});