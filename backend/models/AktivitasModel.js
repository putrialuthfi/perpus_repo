import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Aktivitas = db.define('aktivitas_saya', {
    kode_buku: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    judul_buku: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tgl_peminjaman: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    catatan: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    freezeTableName:true,
    timestamps: false
});

export default Aktivitas;

(async()=>{
    await db.sync();
})();