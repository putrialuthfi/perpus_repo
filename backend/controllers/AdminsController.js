import Admins from "../models/AdminsModel.js";

export const getAdmins = async(req, res)=>{
    try {
        const response = await Admins.findAll();
        res.status(200).json(response);
    } catch (error){
        console.log(error.message);
    }
}

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

export const createAdmin = async(req, res)=>{
    try {
        await Admin.create(req.body);
        res.status(201).json({msg: "Data Admin Telah Ditambahkan"});
    } catch (error){
        console.log(error.message);
    }
}

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