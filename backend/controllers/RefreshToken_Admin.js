import Readers from "../models/ReaderModel.js";
import jwt, { decode } from "jsonwebtoken";

export const refreshToken_admins = async(req, res) => {
    try {
        const refreshToken_admin = req.cookies.refreshToken_admin;
        if(!refreshToken_admin) return res.sendStatus(401);
        const reader = await Readers.findAll({
            where:{
                refresh_token: refreshToken_admin
            }
        });
        if(!reader[0]) return res.sendStatus(403);
        jwt.verify(refreshToken_admin, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
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