const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const middlewareLogRequest = require('./middleware/logs');
const multer = require('multer');

const app = express();
const upload = multer();
const bodyParser = require('body-parser');

//Import Routes
const userRoutes = require('./routes/users');
const AuthRoutes = require('./routes/auth');

app.use(express.json());

// Middleware menampilkan log
app.use(middlewareLogRequest);

// Middleware untuk support form-data
app.use(upload.any());

// Middleware untuk support x-www-form-urlencoded (penting untuk retrofit flutter)
app.use(bodyParser.urlencoded({ extended: false }));


// Route
app.use('/users', userRoutes);
app.use('/auth', AuthRoutes);


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