const validator = require('validator');
const Playlist = require('../models/playlist');

let playlist = {

    test: (req, res) => {
        let datos = req.body;

        return res.status(200).send({
            status: 'success',
            mensaje: 'Haciendo pruebas',
            datos: datos
        });
    },

    agregar: (req, res) => {
        let datos = req.body;

        console.log(datos.audios[0].nombre);

        //console.log(`El nombre es ${datos.audios.nombre[2]}`);

        if (datos.length <= 1) {
            res.status(400).send({
                status: 'error',
                mensaje: 'Necesita cargar canciones en el reproductor'
            })
        } else {
          let playlist = new Playlist();
          playlist.nombre = datos.nombre;
          playlist.durTotal= datos.durTotal;

          if (playlist.nombre === '' || playlist.nombre === 'undefinded') {
            res.status(500).send({
                status: 'error',
                mensaje: 'Falta agregar el nombre de la Playlist'
            });
          } else {

            for (var i = 0; i < datos.audios.length; i++) {
                playlist.audios.push({
                    pos: datos.audios[i].pos,
                    nombre: datos.audios[i].nombre,
                    autor: datos.audios[i].autor,
                    tipo: datos.audios[i].tipo,
                    duracion: datos.audios[i].duracion,
                    horaInicio: datos.audios[i].horaInicio,
                    horaFin: datos.audios[i].horaFin,
                });
            }

            playlist.save((err, playlist) => {
                if (err || !playlist) {
                    res.status(500).send({
                        status: 'error',
                        mensaje: 'Error al guardar en la  BD'
                    })
                } else {
                    console.log(playlist);
                    res.status(200).send({
                        status: 'success',
                        mensaje: 'Se guarda lista de canciones a reproducir'
                    });
                }
            })
          }

        }


    },

    ver: (req, res) => {

        let nombre = req.params.nombre;

        let query = Playlist.find({ nombre: nombre });

        query.sort('_id').exec((err, audios) => {

            if (err) {
                return res.status(500).send({
                    status: 'error',
                    mensaje: 'Error al devolver los datos'
                });
            }

            if (audios.length == 0) {
                return res.status(404).send({
                    status: 'error',
                    mensaje: 'No hay canciones para reproducir'
                });
            }

            return res.status(200).send({
                status: 'success',
                audios
            });

        })
    },
    modificar: (req, res) => {

    },
    eliminar: (req, res) => {

    }
}

module.exports = playlist;
