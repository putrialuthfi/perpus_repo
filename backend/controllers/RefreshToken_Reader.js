import Readers from "../models/ReaderModel.js";
import jwt, { decode } from "jsonwebtoken";

export const refreshToken_readers = async(req, res) => {
    try {
        const refreshToken_reader = req.cookies.refreshToken_reader;
        if(!refreshToken_reader) return res.sendStatus(401);
        const reader = await Readers.findAll({
            where:{
                refresh_token: refreshToken_reader
            }
        });
        if(!reader[0]) return res.sendStatus(403);
        jwt.verify(refreshToken_reader, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if(err) return res.sendStatus(403);
            const readerId = reader[0].id;
            const name = reader[0].name;
            const email = reader[0].email;
            const accessToken = jwt.sign({readerId, name, email}, process.env.ACCESS_TOKEN_SECRET,  {
                expiresIn: '15s'
            });
            res.json(accessToken);
        })
    } catch (error){
        
    }
}