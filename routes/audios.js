let express = require('express');
const multipart  = require('connect-multiparty');
let audios = require('../controllers/audios');

let router = express();

let multipartRuta = multipart({ uploadDir: '../audios'});


//rutas
router.post('/folder', audios.compruebaRuta);
router.post('/add', multipartRuta, audios.agregar);
router.get('/audios/:nombre?', audios.ver);
router.put('/modificar/:id', audios.modificar);
router.delete('/eliminar/:id', audios.eliminar);

module.exports = router;
