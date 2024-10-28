import User from "../models/User";

// Untuk mendapatkan semua user
export const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.json({ message: error.message});
    }
};

// Untuk mendapatkan 1 user
export const getUserById = async (req, res) => {
    try{
        const user = await User.findByPk(req.params.id);
        res.json(user);
    } catch (error) {
        res.json ({ message: error.message});
    }
};

// Membuat user
export const createUser = async (req, res) => {
    try {
        await User.create(req.body);
        res.json({
            "message": "User Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Update User
export const updateUser = async (req, res) => {
    try {
        await User.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "User Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Menghapus user
export const deleteUser = async (req, res) => {
    try {
        await User.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "User Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
};