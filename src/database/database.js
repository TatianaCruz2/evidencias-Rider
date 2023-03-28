import Sequelize from "sequelize";
export const sequelize = new Sequelize('BaseDeDatos', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres'
});