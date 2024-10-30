import { Sequelize } from "sequelize";
import db from "../config/database.js";


const {DataTypes} = Sequelize;

const Readers = db.define('readers', {
    namalengkap:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    ttl: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    jekel: {
        type: DataTypes.ENUM('Laki-Laki', 'Perempuan'),
        allowNull: false,
    },
    nohp: {
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
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    freezeTableName:true,
    timestamps: false
});

export default Readers;

(async()=>{
    await db.sync();
})();