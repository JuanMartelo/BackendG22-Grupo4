const express = require ('express');
const router = express.Router();
const ConsultasController = require ('../controlles/ConsultasController');



//ruta crud

router.get('/',ConsultasController.mostrarConsultas);
router.post('/',ConsultasController.agregarConsultas);
router.get('/:id',ConsultasController.mostrarunaConsulta);
router.delete('/:id',ConsultasController.eliminarConsultas);
router.put('/:id',ConsultasController.actualizarConsultas);


module.exports = router;
