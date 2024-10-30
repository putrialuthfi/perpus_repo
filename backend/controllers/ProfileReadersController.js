import ProfileReaders from "../models/ProfileReadersModel.js";

// Endpoint untuk GET data pembaca/readers
export const getProfileReaders = async (req, res) => {
    try {
        console.log("Fetching profile readers..."); // Log sebelum query
        const profilereaders = await ProfileReaders.findAll();
        console.log("Fetched profile readers:", profilereaders); // Log setelah query
        res.json(profilereaders);
    } catch (error) {
        console.error('Error fetching profilereaders:', error);
        res.status(500).json({ error: error.message });
    }
}



export const getProfileReadersById = async(req, res)=>{
    try {
        const response = await ProfileReaders.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error){
        console.log(error.message);
    }
}

export const createProfileReaders = async(req, res)=>{
    try {
        await ProfileReaders.create(req.body);
        res.status(201).json({msg: "Data Pembaca Telah Ditambahkan"});
    } catch (error){
        console.log(error.message);
    }
}

export const updateProfileReaders = async(req, res)=>{
    try {
        await ProfileReaders.update(req.body, {
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Data Pembaca Telah Diupdate"});
    } catch (error){
        console.log(error.message);
    }
}

export const deleteProfileReaders = async(req, res)=>{
    try {
        await ProfileReaders.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Data Pembaca telah dihapus"});
    } catch (error){
        console.log(error.message);
    }
}