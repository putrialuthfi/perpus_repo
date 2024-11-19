import Pembaca from "../models/PembacaModel.js";

// Endpoint untuk GET data pembaca
export const getPembaca = async (req, res) => {
    try {
        const pembaca = await Pembaca.findAll();
        res.json(pembaca);
    } catch (error) {
        console.error('Error fetching pembaca:', error);
        res.status(500).json({ error: error.message });
    }
}

// Endpoint untuk GET data pembaca by ID
export const getPembacaById = async(req, res)=>{
    try {
        const response = await Pembaca.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error){
        console.log(error.message);
    }
}

// Endpoint untuk CREATE data pembaca
export const createPembaca = async(req, res)=>{
    try {
        await Pembaca.create(req.body);
        res.status(201).json({msg: "Data Pembaca Berhasil Ditambahkan"});
    } catch (error){
        console.log(error.message);
    }
}

// Endpoint untuk UPDATE data pembaca
export const updatePembaca = async(req, res)=>{
    try {
        await Pembaca.update(req.body, {
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Data Pembaca Telah Diupdate"});
    } catch (error){
        console.log(error.message);
    }
}

// Endpoint untuk DELETE data pembaca
export const deletePembaca = async(req, res)=>{
    try {
        await Pembaca.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Data Pembaca Telah Dihapus"});
    } catch (error){
        console.log(error.message);
    }
}


// SYNTAX LAMA
// const express = require("express");
// const mysql = require("mysql2");
// const app = express();
// import Pembaca from "../models/PembacaModel.js";

// // Endpoint untuk GET data pembaca/readers
// // export const getPembaca = async (req, res) => {
// //     try {
// //         const pembaca = await Pembaca.findAll();
// //         res.json(pembaca);
// //     } catch (error) {
// //         console.error('Error fetching pembaca:', error);
// //         res.status(500).json({ error: error.message });
// //     }
// // }

// app.get("/pembaca", async (req, res) => {
//     try {
//         const sql = "SELECT * FROM pembaca";
//         db.query(sql, (err, results) => {
//             if (err) {
//                 console.error('Error fetching pembaca:', err);
//                 return res.status(500).json({ error: err.message });
//             }
//             res.json(results);
//         });
//     } catch (error) {
//         console.error('Error fetching pembaca:', error);
//         res.status(500).json({ error: error.message });
//     }
// });

// // Endpoint untuk GET data pembaca/readers by ID
// export const getPembacaById = async(req, res)=>{
//     try {
//         const response = await Pembaca.findOne({
//             where:{
//                 id: req.params.id
//             }
//         });
//         res.status(200).json(response);
//     } catch (error){
//         console.log(error.message);
//     }
// }

// // Endpoint untuk CREATE data pembaca/readers
// // export const createPembaca = async(req, res)=>{
// //     try {
// //         await Pembaca.create(req.body);
// //         res.status(201).json({msg: "Data Pembaca Telah Ditambahkan"});
// //     } catch (error){
// //         console.log(error.message);
// //     }
// // }

// // UNTUK POST
// app.post("/pembaca", (req, res) => {
//     const { nama_lengkap, ttl, jenis_kelamin, no_hp, domisili, email } = req.body;

//     const sql = "INSERT INTO pembaca (nama_lengkap, ttl, jenis_kelamin, no_hp, domisili, email) VALUES (?, ?, ?, ?, ?, ?, ?)";
//     db.query(sql, [nama_lengkap, ttl, jenis_kelamin, no_hp, domisili, email], (err, result) => {
//         if (err) {
//             console.error("Error inserting data:", err);
//             res.status(500).json({ message: "Gagal menyimpan data" });
//             return;
//         }
//         res.status(200).json({ message: "Data berhasil disimpan" });
//     });
// });


// // Endpoint untuk UPDATE data pembaca/readers
// export const updatePembaca = async(req, res)=>{
//     try {
//         await Pembaca.update(req.body, {
//             where:{
//                 id: req.params.id
//             }
//         });
//         res.status(200).json({msg: "Data Pembaca Telah Diupdate"});
//     } catch (error){
//         console.log(error.message);
//     }
// }

// // Endpoint untuk DELETE data pembaca/readers
// export const deletePembaca = async(req, res)=>{
//     try {
//         await Pembaca.destroy({
//             where:{
//                 id: req.params.id
//             }
//         });
//         res.status(200).json({msg: "Data Pembaca telah dihapus"});
//     } catch (error){
//         console.log(error.message);
//     }
// }