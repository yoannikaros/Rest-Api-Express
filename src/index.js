const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const middlewareLogRequest = require('./middleware/logs');
const multer = require('multer');
const app = express();
const upload = multer();
app.use(express.json());
const userRoutes = require('./routes/users')

// Middleware menampilkan log
app.use(middlewareLogRequest);

// Middleware untuk mengurai form-data
app.use(upload.any());

// Route
app.use('/users', userRoutes);


// Index message
app.get('/', (req, res) => {
    res.json({
        message: 'Halo dek'
    })
});

// Port
app.listen(PORT, () => {
    console.log('Server berhasil di running di port' + PORT)
})