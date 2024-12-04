import Readers from "../models/ReaderModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getReaders = async (req, res) =>{
    try{
        const readers = await Readers.findAll({
            attributes: ['id', 'name', 'email']
        });
        res.json(readers);
    }catch (error){
        console.log(error);
    }
}

export const RegisterReaders = async(req, res) => {
    const { name, email, password, confPassword } = req.body;
    if(password !== confPassword) return res.status(400).json({msg: "Password dan Confirm Password Tidak Cocok"});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try{
        await Readers.create({
            name: name,
            email: email,
            password: hashPassword
        });
        res.json({msg: "Registrasi Akun Berhasil"});
    } catch (error){
        console.log(error);
    }
}

export const LoginReaders = async(req, res) => {
    try{
        const reader = await Readers.findAll({
            where:{
                email: req.body.email
            }
        });
        const match = await bcrypt.compare(req.body.password, reader[0].password);
        if(!match) return res.status(400).json({msg: "Password yang Anda Masukan Salah"});
        const readerId = reader[0].id;
        const name = reader[0].name;
        const email = reader[0].email;
        const accessToken = jwt.sign({readerId, name, email}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: '20s'
        });
        const refreshToken = jwt.sign({readerId, name, email}, process.env.REFRESH_TOKEN_SECRET,{
            expiresIn: '1d'
        });
        await Readers.update({refresh_token:refreshToken},{
            where:{
                id: readerId
            }
        });
        res.cookie('refreshToken', refreshToken,{
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
        });
        res.json({ accessToken });
    } catch (error){
        res.status(404).json({msg: "Email Tidak Ditemukan"});
    }
}

export const LogoutReaders = async(req, res) => {
    const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) return res.sendStatus(204);
        const reader = await Readers.findAll({
            where:{
                refresh_token: refreshToken
            }
        });
        if(!reader[0]) return res.sendStatus(204);
        const readerId = reader[0].id;
        await Readers.update({refresh_token: null},{
            where:{
                id: readerId
            }
        })
        res.clearCookie('refreshToken');
        return res.sendStatus(200);
}