const mongoose = require('mongoose');

const schema = mongoose.Schema;

let playlistSchema = schema({
  nombre: String,
  durTotal: Number,
  audios:
    [
      {
        pos: Number,
        nombre: String,
        autor: String,
        tipo: String,
        duracion: Number,
        horaInicio: Number,
        horaFin: Number
      }
    ],
});

module.exports = mongoose.model('Playlist', playlistSchema);
