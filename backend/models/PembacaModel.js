import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Pembaca = db.define('profil_pembaca', {
    nama_lengkap:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    ttl: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    jenis_kelamin: {
        type: DataTypes.ENUM('Laki-Laki', 'Perempuan'),
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

export default Pembaca;

(async()=>{
    await db.sync();
})();