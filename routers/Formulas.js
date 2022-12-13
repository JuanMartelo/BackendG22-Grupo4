const express = require ('express');
const router = express.Router();
const FormulasController = require ('../controlles/FormulasController');



//ruta crud

router.get('/',FormulasController.mostrarFormulas);
router.post('/',FormulasController.agregarFormulas);
router.get('/:id',FormulasController.mostrarunaFormula);
router.delete('/:id',FormulasController.eliminarFormulas);
router.put('/:id',FormulasController.actualizarFormulas);


module.exports = router;
