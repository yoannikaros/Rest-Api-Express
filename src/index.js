const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const middlewareLogRequest = require('./middleware/logs');
const multer = require('multer');
const upload = multer();

const app = express();
app.use(express.json());

const userRoutes = require('./routes/users')

app.use(middlewareLogRequest);

// Middleware untuk mengurai form-data
app.use(upload.any());

app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.json({
        message: 'Halo dek'
    })
});


app.listen(PORT, () => {
    console.log('Server berhasil di running di port' + PORT)
})