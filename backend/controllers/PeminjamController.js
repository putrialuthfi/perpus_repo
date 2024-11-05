import Peminjam from "../models/PeminjamModel.js";

// Endpoint untuk GET data peminjam
export const getPeminjam = async (req, res) => {
    try {
        const peminjam = await Peminjam.findAll();
        res.json(peminjam);
    } catch (error) {
        console.error('Error fetching peminjam:', error);
        res.status(500).json({ error: error.message });
    }
}

// Endpoint untuk GET data peminjam by ID
export const getPeminjamById = async(req, res)=>{
    try {
        const response = await Peminjam.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error){
        console.log(error.message);
    }
}

// Endpoint untuk CREATE data peminjam
export const createPeminjam = async(req, res)=>{
    try {
        await Peminjam.create(req.body);
        res.status(201).json({msg: "Data Peminjam Berhasil Ditambahkan"});
    } catch (error){
        console.log(error.message);
    }
}

// Endpoint untuk UPDATE data peminjam
export const updatePeminjam = async(req, res)=>{
    try {
        await Peminjam.update(req.body, {
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Data Peminjam Telah Diupdate"});
    } catch (error){
        console.log(error.message);
    }
}

// Endpoint untuk DELETE data peminjam
export const deletePeminjam = async(req, res)=>{
    try {
        await Peminjam.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Data Peminjam Telah Dihapus"});
    } catch (error){
        console.log(error.message);
    }
}