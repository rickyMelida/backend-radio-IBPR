const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

let rutasAudios  = require('./routes/audios');
let rutasPlaylist = require('./routes/playlist');

//Agregar prefijos a rutas / cargar rutas
app.use('/audios', rutasAudios);
app.use('/playlist', rutasPlaylist);

module.exports = app; 
