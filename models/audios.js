'use strict';

const mongoose = require('mongoose');

const schema = mongoose.Schema;

let AudiosSchema = schema({
    nombre: String,
    autor: String,
    tipo: String,
    duracion: String
});

module.exports = mongoose.model('Audios', AudiosSchema);