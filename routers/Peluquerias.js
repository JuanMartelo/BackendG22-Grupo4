const express = require ('express');
const router = express.Router();
const PeluqueriasController = require ('../controlles/PeluqueriasController');



//ruta crud

router.get('/',PeluqueriasController.mostrarPeluquerias);
router.post('/',PeluqueriasController.agregarPeluquerias);
router.get('/:id',PeluqueriasController.mostrarunaPeluqueria);
router.delete('/:id',PeluqueriasController.eliminarPeluquerias);
router.put('/:id',PeluqueriasController.actualizarPeluquerias);


module.exports = router;
