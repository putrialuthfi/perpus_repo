import UploadBuku from "../models/UploadBukuModel.js";

// Endpoint untuk GET data upload data buku
export const getUploadBuku = async (req, res) => {
    try {
        const uploadbuku = await UploadBuku.findAll();
        res.json(uploadbuku);
    } catch (error) {
        console.error('Error fetching UploadBuku:', error);
        res.status(500).json({ error: error.message });
    }
}

// Endpoint untuk GET data upload buku by ID
export const getUploadBukuById = async(req, res)=>{
    try {
        const response = await UploadBuku.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error){
        console.log(error.message);
    }
}

// Endpoint untuk CREATE data upload buku
export const createUploadBuku = async(req, res)=>{
    try {
        await UploadBuku.create(req.body);
        res.status(201).json({msg: "Upload Buku Telah Berhasil"});
    } catch (error){
        console.log(error.message);
    }
}

// Endpoint untuk UPLOAD data upload buku
export const updateUploadBuku = async(req, res)=>{
    try {
        await UploadBuku.update(req.body, {
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Data Buku Telah Diupdate"});
    } catch (error){
        console.log(error.message);
    }
}

// Endpoint untuk DELETE data upload buku
export const deleteUploadBuku = async(req, res)=>{
    try {
        await UploadBuku.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Data Buku telah dihapus"});
    } catch (error){
        console.log(error.message);
    }
}