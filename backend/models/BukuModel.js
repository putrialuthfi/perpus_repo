import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Buku = db.define('buku', {
    judul_buku:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    kategori:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    foto_buku: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isUrl: true,
        },
    }, 
    nama_penulis:{
        type: DataTypes.STRING,
        allowNull: false,
    },
},  {
    freezeTableName: true,
    timestamps: false
});

export default Buku;

(async()=>{
    await db.sync();
})();