import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const UploadBuku = db.define('data_upload_buku', {
    foto_buku: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isUrl: true,
        },
    },    
    kode_buku: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nama_penulis: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    judul_buku: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    kategori: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    freezeTableName:true,
    timestamps: false
});

export default UploadBuku;

(async()=>{
    await db.sync();
})();