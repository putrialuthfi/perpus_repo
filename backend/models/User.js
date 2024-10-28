import { DataTypes } from "sequelize";
import db from '../config/database.js';

const User = db.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

export default User;


// import {Sequelize} from "sequelize";
// import db from "../config/database";

// const {DataTypes} = Sequelize;

// const User = db.define('users',{
//     name: DataTypes.STRING,
//     email: DataTypes.STRING,
//     gender: DataTypes.STRING,
// },{  
//     freezeTableName:true
// });

// export default User;

// (async()=>{
//     await db.sync();
// })();