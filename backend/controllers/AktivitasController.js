import Aktivitas from "../models/AktivitasModel.js";

// Endpoint untuk GET data aktivitas
export const getAktivitas = async (req, res) => {
    try {
        const aktivitas = await Aktivitas.findAll();
        res.json(aktivitas);
    } catch (error) {
        console.error('Error fetching aktivitas:', error);
        res.status(500).json({ error: error.message });
    }
}

// Endpoint untuk GET data aktivitas by ID
export const getAktivitasById = async(req, res)=>{
    try {
        const response = await Aktivitas.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error){
        console.log(error.message);
    }
}

// Endpoint untuk CREATE data aktivitas/readers
export const createAktivitas = async(req, res)=>{
    try {
        await Aktivitas.create(req.body);
        res.status(201).json({msg: "Data Aktivitas Saya Telah Ditambahkan"});
    } catch (error){
        console.log(error.message);
    }
}

// Endpoint untuk UPDATE data aktivitas/readers
export const updateAktivitas = async(req, res)=>{
    try {
        await Aktivitas.update(req.body, {
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Data Aktivitas Saya Telah Diupdate"});
    } catch (error){
        console.log(error.message);
    }
}

// Endpoint untuk DELETE data aktivitas/readers
export const deleteAktivitas = async(req, res)=>{
    try {
        await Aktivitas.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Data Aktivitas Saya telah dihapus"});
    } catch (error){
        console.log(error.message);
    }
}