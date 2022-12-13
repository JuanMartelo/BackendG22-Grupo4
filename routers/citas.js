const express = require ('express');
const router = express.Router();
const CitasController = require ('../controlles/CitasController');



//ruta crud

router.get('/',CitasController.mostrarCitas);
router.post('/',CitasController.agregarCitas);
router.get('/:id',CitasController.mostrarunaCita);
router.delete('/:id',CitasController.eliminarCitas);
router.put('/:id',CitasController.actualizarCitas);


module.exports = router;
