import { Sequelize } from "sequelize";
import koneksi from "../config/db.js";


const {DataTypes} = Sequelize;

const Readers = koneksi.define('readers', {
    namalengkap:{
        type: DataTypes.VARCHAR,
        allowNull: false,
    },
    ttl: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    jekel: {
        type: DataTypes.ENUM,
        allowNull: false,
    },
    nohp: {
        type: DataTypes.VARCHAR,
        allowNull: false,
    },
    domisili: {
        type: DataTypes.VARCHAR,
        allowNull: false,
    },
    email: {
        type: DataTypes.VARCHAR,
        allowNull: false,
    },
    password: {
        type: DataTypes.VARCHAR,
        allowNull: false,
    },
}, {
    freezeTableName:true,
    timestamps: false
});

export default Readers;

(async()=>{
    await koneksi.sync();
})();