import ProfileReaders from "../models/ProfileReadersModel.js";
import ProfileReadersRoute from "../routes/ProfileReadersRoute.js";

// app.get('/profilereaders', async (req, res) => {
//     try {
//       const profilereaders = await ProfileReaders.findAll();
//       res.json(profilereaders);
//     } catch (error) {
//       console.error('Error fetching profilereaders:', error);
//       res.status(500).json({ error: error.message });
//     }
//   });


// Endpoint untuk GET data pembaca/readers
export const getProfileReaders = async(req, res)=>{
    try {
        const profilereaders = await ProfileReaders.findAll();
        res.json(profilereaders);
    } catch (error){
        console.error('Error fetching profilereaders:', error);
        res.status(500).json({ error: error.message });
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