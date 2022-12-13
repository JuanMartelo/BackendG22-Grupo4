const Formulas = require ('../models/Formulas');

exports.mostrarFormulas = async (req,res) => {

    try{
    const formulas = await Formulas.find();
    res.json(formulas);

    } catch (error) {
        console.log(error);
        res.status(500).send("error al consultar la formula")
    }
}

exports.agregarFormulas = async (req,res) => {
    try {
        let formulas;
        formulas = new Formulas(req.body)

        await formulas.save();
        res.send(formulas);
        
    } catch (error){
        console.log(error);
        res.status(500).send("error al agregar formulas");
    }
}

exports.mostrarunaFormula = async (req,res) => {

    try {
        let formulas = await Formulas.findById(req.params.id);

    if (!formulas) {
        res.status(404).json({msg: "no existe formula"});
    } 

    res.send(formulas);

    }catch (error) {
        console.log(error);
    res.status(500).send("No se encuentra la formula")
    }
}

exports.eliminarFormulas = async (req,res) => {

    try {
        let formulas = await Formulas.findById(req.params.id);

    if (!formulas) {
        res.status(404).json({msg: "no existe formula"});
        return
    } 

    await Formulas.findOneAndRemove({_id:req.params.id});
    res.json({msg: "La formula fue eliminada"})

    }catch (error) {
        console.log(error);
    res.status(500).send("Error de conexion")
    }
}

// Funcion Actualizar
exports.actualizarFormulas = async (req,res) => {
    try{
        const {medicamento,cantidad, dosis,uso, recomendaciones} = req.body;
        let formula = await Formulas.findById(req.params.id);

    if (!formula) {
        res.status(404).json({msg: "no hay formulas"});
        return
    } 

    formula.medicamento = medicamento;
    formula.cantidad = cantidad;
    formula.dosis = dosis;
    formula.uso = uso;
    formula.recomendaciones = recomendaciones;
    
    
    formula = await Formulas.findOneAndUpdate({_id: req.params.id},formula,{new:true});
    res.json(formula);


    }catch (error) {
        console.log(error);
    res.status(500).send("Error de conexion")
    }
}



