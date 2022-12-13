const express = require ('express');
const router = express.Router();
const MascotasController = require ('../controlles/MascotasController');



//ruta crud

router.get('/',MascotasController.mostrarMascotas);
router.post('/',MascotasController.agregarMascotas);
router.get('/:id',MascotasController.mostrarunaMascota); //Pendiente de la ultima palabra
router.delete('/:id',MascotasController.eliminarMascotas);
router.put('/:id',MascotasController.actualizarMascotas);

module.exports = router;
