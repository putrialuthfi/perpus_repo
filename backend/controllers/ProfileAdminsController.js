import ProfileAdmins from "../models/ProfileAdminsModel.js";

// Endpoint untuk GET data admin
export const getProfileAdmins = async (req, res) => {
    try {
        const profileadmins = await ProfileAdmins.findAll();
        res.json(profileadmins);
    } catch (error) {
        console.error('Error fetching profileadmins:', error);
        res.status(500).json({ error: error.message });
    }
}

export const getProfileAdminsById = async(req, res)=>{
    try {
        const response = await ProfileAdmins.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error){
        console.log(error.message);
    }
}

export const createProfileAdmins = async(req, res)=>{
    try {
        await ProfileAdmins.create(req.body);
        res.status(201).json({msg: "Data Admin Telah Ditambahkan"});
    } catch (error){
        console.log(error.message);
    }
}

export const updateProfileAdmins = async(req, res)=>{
    try {
        await ProfileAdmins.update(req.body, {
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Data Admin Telah Diupdate"});
    } catch (error){
        console.log(error.message);
    }
}

export const deleteProfileAdmins = async(req, res)=>{
    try {
        await ProfileAdmins.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Data Admin telah dihapus"});
    } catch (error){
        console.log(error.message);
    }
}