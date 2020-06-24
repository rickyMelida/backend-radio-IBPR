const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();

app.use(fileUpload());

//Cargar CORS para realizar peticiones desde frontend
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
let rutasCanciones  = require('./routes/canciones');
let rutasReproductor = require('./routes/reproductor');

//Agregar prefijos a rutas / cargar rutas
app.use('/cancion', rutasCanciones);
app.use('/reproductor', rutasReproductor);

module.exports = app;
