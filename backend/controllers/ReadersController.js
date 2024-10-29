import Readers from "../models/ReadersModel";

export const getReaders = async(req, res)=>{
    try {
        const response = await Readers.findAll();
        res.status(200).json(response);
    } catch (error){
        console.log(error.message);
    }
}

export const getReaderById = async(req, res)=>{
    try {
        const response = await Reader.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error){
        console.log(error.message);
    }
}

export const createReader = async(req, res)=>{
    try {
        await Reader.create(req.body);
        res.status(201).json({msg: "Data Pembaca Telah Ditambahkan"});
    } catch (error){
        console.log(error.message);
    }
}

export const updateReader = async(req, res)=>{
    try {
        await Reader.update(req.body, {
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Data Pembaca Telah Diupdate"});
    } catch (error){
        console.log(error.message);
    }
}

export const deleteReader = async(req, res)=>{
    try {
        await Reader.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Data Pembaca telah dihapus"});
    } catch (error){
        console.log(error.message);
    }
}