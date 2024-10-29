import { Sequelize } from "sequelize";
// import koneksi from "../config/database.js";

// import db from "../config/database.js";


const {DataTypes} = Sequelize;

const Admins = koneksi.define('admins', {
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

export default Admins;

(async()=>{
  await koneksi.sync();
})();