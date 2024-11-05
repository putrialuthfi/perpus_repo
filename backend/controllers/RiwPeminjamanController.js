import RiwPeminjaman from "../models/RiwPeminjamanModel.js";

// Endpoint untuk GET data riwpeminjaman/readers
export const getRiwPeminjaman = async (req, res) => {
    try {
        const riwpeminjaman = await RiwPeminjaman.findAll();
        res.json(riwpeminjaman);
    } catch (error) {
        console.error('Error fetching riwpeminjaman:', error);
        res.status(500).json({ error: error.message });
    }
}

// Endpoint untuk GET data riwpeminjaman/readers by ID
export const getRiwPeminjamanById = async(req, res)=>{
    try {
        const response = await RiwPeminjaman.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error){
        console.log(error.message);
    }
}

// Endpoint untuk CREATE data riwpeminjaman/readers
export const createRiwPeminjaman = async(req, res)=>{
    try {
        await RiwPeminjaman.create(req.body);
        res.status(201).json({msg: "Data Riwayat Peminjaman Telah Ditambahkan"});
    } catch (error){
        console.log(error.message);
    }
}

// Endpoint untuk UPDATE data riwpeminjaman/readers
export const updateRiwPeminjaman = async(req, res)=>{
    try {
        await RiwPeminjaman.update(req.body, {
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Data Riwayat Peminjaman Telah Diupdate"});
    } catch (error){
        console.log(error.message);
    }
}

// Endpoint untuk DELETE data riwpeminjaman/readers
export const deleteRiwPeminjaman = async(req, res)=>{
    try {
        await RiwPeminjaman.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Data Riwayat Peminjaman telah dihapus"});
    } catch (error){
        console.log(error.message);
    }
}