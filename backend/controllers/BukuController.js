import Buku from "../models/BukuModel.js";

// Endpoint untuk GET data buku
export const getBuku = async (req, res) => {
    try {
        const buku = await Buku.findAll();
        res.json(buku);
    } catch (error) {
        console.error('Error fetching buku:', error);
        res.status(500).json({ error: error.message });
    }
}

// Endpoint untuk GET data buku by ID
export const getBukuById = async(req, res)=>{
    try {
        const response = await Buku.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error){
        console.log(error.message);
    }
}

// Endpoint untuk CREATE data buku
export const createBuku = async(req, res)=>{
    try {
        await Buku.create(req.body);
        res.status(201).json({msg: "Data Buku Berhasil Ditambahkan"});
    } catch (error){
        console.log(error.message);
    }
}

// Endpoint untuk UPDATE data buku
export const updateBuku = async(req, res)=>{
    try {
        await Buku.update(req.body, {
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Data Buku Telah Diupdate"});
    } catch (error){
        console.log(error.message);
    }
}

// Endpoint untuk DELETE data buku
export const deleteBuku = async(req, res)=>{
    try {
        await Buku.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Data Buku Telah Dihapus"});
    } catch (error){
        console.log(error.message);
    }
}