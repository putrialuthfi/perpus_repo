import Admin from "../models/AdminModel.js";

// Endpoint untuk GET data admin
export const getAdmin = async (req, res) => {
    try {
        const admin = await Admin.findAll();
        res.json(admin);
    } catch (error) {
        console.error('Error fetching admin:', error);
        res.status(500).json({ error: error.message });
    }
}

// Endpoint untuk GET data admin by ID
export const getAdminById = async(req, res)=>{
    try {
        const response = await Admin.findOne({
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
export const createAdmin = async(req, res)=>{
    try {
        await Admin.create(req.body);
        res.status(201).json({msg: "Data Admin Berhasil Ditambahkan"});
    } catch (error){
        console.log(error.message);
    }
}

// Endpoint untuk UPDATE data admin
export const updateAdmin = async(req, res)=>{
    try {
        await Admin.update(req.body, {
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
export const deleteAdmin = async(req, res)=>{
    try {
        await Admin.destroy({
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
//         const data = await AdminModel.find();
//         res.status(200).json(data);
//     } catch (error) {
//         res.status(500).json({message:'Gagal mendapatkan data', error})
//     }
// }
// const { getAdmin } = require('../models/AdminModel.js');
// import {getAdmin} from '../models/AdminModel.js';

// const fetchAdmin = async (req, res) => {
//   try {
//     const admin = await getAdmin();
//     res.status(200).json(admin); // Mengirimkan data dalam format JSON
//   } catch (error) {
//     console.error("Error fetching admin data:", error);
//     res.status(500).json({ message: "Gagal mendapatkan data admin" });
//   }
// };

// export {fetchAdmin};
// module.exports = { fetchAdmin };