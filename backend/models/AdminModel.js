import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Admin = db.define('profil_admin', {
    nama_lengkap:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    ttl: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    jenis_kelamin: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    no_hp: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    domisili: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // password: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    // },
}, {
    freezeTableName:true,
    timestamps: false
});

export default Admin;

(async()=>{
    await db.sync();
})();