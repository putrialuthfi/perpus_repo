import { Sequelize } from "sequelize";

const db = new Sequelize ('db_siperpus','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;