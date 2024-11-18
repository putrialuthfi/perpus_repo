import Admins from "../models/AdminsModel.js";

// Endpoint untuk GET data admin
export const getAdmins = async (req, res) => {
    try {
        const admins = await Admins.findAll();
        res.json(admins);
    } catch (error) {
        console.error('Error fetching admins:', error);
        res.status(500).json({ error: error.message });
    }
}

// Endpoint untuk GET data admin by ID
export const getAdminsById = async(req, res)=>{
    try {
        const response = await Admins.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error){
        console.log(error.message);
    }
}

// Endpoint untuk CREATE data admin
export const createAdmins = async(req, res)=>{
    try {
        await Admins.create(req.body);
        res.status(201).json({msg: "Data Admin Berhasil Ditambahkan"});
    } catch (error){
        console.log(error.message);
    }
}

// Endpoint untuk UPDATE data admin
export const updateAdmins = async(req, res)=>{
    try {
        await Admins.update(req.body, {
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Data Admin Telah Diupdate"});
    } catch (error){
        console.log(error.message);
    }
}

// Endpoint untuk DELETE data admin
export const deleteAdmins = async(req, res)=>{
    try {
        await Admins.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Data Admin telah dihapus"});
    } catch (error){
        console.log(error.message);
    }
}


// DISINI

// untuk mendapatkan data dari database
// export const getDataFromDatabase = async (req, res) => {
//     try {
//         const data = await AdminsModel.find();
//         res.status(200).json(data);
//     } catch (error) {
//         res.status(500).json({message:'Gagal mendapatkan data', error})
//     }
// }
// const { getAdmins } = require('../models/AdminsModel.js');
// import {getAdmins} from '../models/AdminsModel.js';

// const fetchAdmins = async (req, res) => {
//   try {
//     const admins = await getAdmins();
//     res.status(200).json(admins); // Mengirimkan data dalam format JSON
//   } catch (error) {
//     console.error("Error fetching admin data:", error);
//     res.status(500).json({ message: "Gagal mendapatkan data admin" });
//   }
// };

// export {fetchAdmins};
// module.exports = { fetchAdmins };