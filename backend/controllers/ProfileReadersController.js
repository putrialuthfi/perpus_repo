import ProfileReaders from "../models/ProfileReadersModel.js";

export const getProfileReaders = async(req, res)=>{
    try {
        const response = await ProfileReaders.findAll();
        res.status(200).json(response);
    } catch (error){
        console.log(error.message);
    }
}

export const getProfileReaderById = async(req, res)=>{
    try {
        const response = await ProfileReader.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error){
        console.log(error.message);
    }
}

export const createProfileReader = async(req, res)=>{
    try {
        await ProfileReader.create(req.body);
        res.status(201).json({msg: "Data Pembaca Telah Ditambahkan"});
    } catch (error){
        console.log(error.message);
    }
}

export const updateProfileReader = async(req, res)=>{
    try {
        await ProfileReader.update(req.body, {
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Data Pembaca Telah Diupdate"});
    } catch (error){
        console.log(error.message);
    }
}

export const deleteProfileReader = async(req, res)=>{
    try {
        await ProfileReader.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Data Pembaca telah dihapus"});
    } catch (error){
        console.log(error.message);
    }
}