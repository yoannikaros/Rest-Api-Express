const dbPool = require('../config/database');

// Menampilkan data
const GetAllAdmin = () => {
    const SQLQuery = 'SELECT * FROM tb_admin';
    return dbPool.execute(SQLQuery);
}


// Mendapatkan data berdasarkan id
const getById = async (id) => {
    const connection = await dbPool.getConnection();
    try {
        const [rows] = await connection.query('SELECT * FROM tb_admin WHERE id = ?', [id]);
        return rows[0];
    } catch (error) {
        throw error;
    } finally {
        connection.release();
    }
};


// Menambahkan data
const CreateNewUser = (body) => {
    const SQLQueryCreate = 'INSERT INTO tb_admin (username, password) VALUES (?, ?)';
    const values = [body.username, body.password];

    return dbPool.execute(SQLQueryCreate, values);
};

// Update data
const updateUser = (body, idUser) => {
    const SQLUpdateQuery = `UPDATE tb_admin SET username='${body.username}',password='${body.password}' WHERE id = ${idUser}`;
    return dbPool.execute(SQLUpdateQuery);
}

// Delete User
const deleteUser = (idUser) => {
    const SQLDeleteQuery = `DELETE FROM tb_admin WHERE id=${idUser}`;
    return dbPool.execute(SQLDeleteQuery);
}

// Login
const findByUsernameAndPassword = async (username, password) => {
    const query = `SELECT id FROM tb_admin WHERE username = ? AND password = ?`;
    const [results] = await dbPool.execute(query, [username, password]);
    return results;
};

module.exports = {
    getById,
    GetAllAdmin,
    CreateNewUser,
    updateUser,
    deleteUser,
    findByUsernameAndPassword
}
