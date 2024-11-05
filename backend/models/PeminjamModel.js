import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Peminjam = db.define('data_peminjam', {
    nama_peminjam:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    kode_buku: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    kode_pinjam: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tgl_peminjaman: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    freezeTableName:true,
    timestamps: false
});

export default Peminjam;

(async()=>{
    await db.sync();
})();