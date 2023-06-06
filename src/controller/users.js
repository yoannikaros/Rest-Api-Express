const UserModel = require('../models/tb_admin');


// Mendapatkan data
const getAllUsers = async (req, res) => {
    try {

        const [data] = await UserModel.GetAllAdmin();
        res.json({
            message: 'Get All Users Success',
            data: data
        })

    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            Errornya: error
        })
    }
}


//Membuat data
const CreateNewUser = async (req, res) => {
    const { body } = req;

    try {
        await UserModel.CreateNewUser(body);
        res.json({
            message: 'Post User Success',
            data: body
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Server Error',
            error: error.message
        });
    }
};

//Update data
const updatUser = async (req, res) => {
    const { idUser } = req.params;
    const { body } = req;
    try {
        await UserModel.updateUser(body, idUser);
        res.json({
            message: 'Update User Success',
            data: {
                id: idUser,
                ...body
            }
        });
    } catch (error) {

        console.error(error);
        res.status(500).json({
            message: 'Server Error',
            error: error.message
        });

    }
}

// Detele
const deleteUser = async (req, res) => {
    const { idUser } = req.params;
    try {
        await UserModel.deleteUser(idUser);
        res.json({
            message: 'Delete User Success',
            data: null
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Server Error',
            error: error.message
        });
    }
}


// Mendapatkan data berdasarkan id
const getDataById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await UserModel.getById(id);

        if (data) {

            res.json({
                message: 'Get id success',
                data: data
            });


        } else {
            res.status(404).json({ message: 'Data tidak ditemukan' });
        }
    } catch (err) {
        console.error('Error mengambil data:', err);
        res.status(500).json({ message: 'Terjadi kesalahan server' });
    }
};

// Login
const login = async (req, res) => {

    try {
        const { username, password } = req.body;
        const results = await UserModel.findByUsernameAndPassword(username, password);

        if (results.length === 0) {
            return res.status(401).json({ message: 'Username atau password salah' });
        }

        // Jika login berhasil
        const user = results[0];
        return res.status(200).json({ message: 'Login berhasil', userId: user.id });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Terjadi kesalahan server' });
    }
};

module.exports = {
    getAllUsers,
    getDataById,
    CreateNewUser,
    updatUser,
    deleteUser,
    login
}