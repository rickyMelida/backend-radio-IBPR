let express = require('express');
let playlist = require('../controllers/playlist');

let router = express.Router();

//rutas
router.post('/test', playlist.test);
router.post('/add', playlist.agregar);
router.get('/ver/:fecha?', playlist.ver);
router.put('/modificar/id', playlist.modificar);
router.delete('/eliminar/id', playlist.eliminar);


module.exports = router;