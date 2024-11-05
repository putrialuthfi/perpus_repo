import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const RiwPeminjaman = db.define('riwayat_peminjaman', {
    kode_pinjam: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    kode_buku: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tgl_peminjaman: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    tgl_pengembalian: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
}, {
    freezeTableName:true,
    timestamps: false
});

export default RiwPeminjaman;

(async()=>{
    await db.sync();
})();