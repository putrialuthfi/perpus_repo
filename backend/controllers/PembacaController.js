import Pembaca from "../models/PembacaModel.js";

// Endpoint untuk GET data pembaca/readers
export const getPembaca = async (req, res) => {
    try {
        const pembaca = await Pembaca.findAll();
        res.json(pembaca);
    } catch (error) {
        console.error('Error fetching pembaca:', error);
        res.status(500).json({ error: error.message });
    }
}

// Endpoint untuk GET data pembaca/readers by ID
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

// Endpoint untuk CREATE data pembaca/readers
export const createPembaca = async(req, res)=>{
    try {
        await Pembaca.create(req.body);
        res.status(201).json({msg: "Data Pembaca Telah Ditambahkan"});
    } catch (error){
        console.log(error.message);
    }
}

// Endpoint untuk UPDATE data pembaca/readers
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

// Endpoint untuk DELETE data pembaca/readers
export const deletePembaca = async(req, res)=>{
    try {
        await Pembaca.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Data Pembaca telah dihapus"});
    } catch (error){
        console.log(error.message);
    }
}