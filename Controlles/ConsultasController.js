const Consultas = require ('../models/Consultas');

exports.mostrarConsultas = async (req,res) => {

    try{
    const consultas = await Consultas.find();
    res.json(consultas);

    } catch (error) {
        console.log(error);
        res.status(500).send("error al consultar las clientes")
    }
}

exports.agregarConsultas = async (req,res) => {
    try {
        let consultas;
        consultas = new Consultas(req.body)

        await consultas.save();
        res.send(consultas);
        
    } catch (error){
        console.log(error);
        res.status(500).send("error agregar consultas");
    }
}

exports.mostrarunaConsulta = async (req,res) => {

    try {
        let consultas = await Consultas.findById(req.params.id);

    if (!consultas) {
        res.status(404).json({msg: "no existe consultas"});
    }   

    res.send(consultas);

    }catch (error) {
        console.log(error);
    res.status(500).send("No se encuentra la consulta")
    }
}

exports.eliminarConsultas = async (req,res) => {

    try {
        let consultas = await Consultas.findById(req.params.id);

    if (!consultas) {
        res.status(404).json({msg: "no existe consulta"});
        return
    } 

    await Consultas.findOneAndRemove({_id:req.params.id});
    res.json({msg: "La consulta fue eliminada"})

    }catch (error) {
        console.log(error);
    res.status(500).send("Error de conexion")
    }
}

// Funcion Actualizar
exports.actualizarConsultas = async (req,res) => {
    try{
        const {vacuna,desparacitante, antipulgas,enfcronica,proprefiere, amnesis,} = req.body;
        let consulta = await Consultas.findById(req.params.id);

    if (!consulta) {
        res.status(404).json({msg: "no hay consultas"});
        return
    } 

    consulta.vacuna = vacuna;
    consulta.desparacitante = desparacitante;
    consulta.antipulgas = antipulgas;
    consulta.enfcronica = enfcronica;
    consulta.proprefiere = proprefiere;
    consulta.amnesis = amnesis;
    
    
    consulta = await Consultas.findOneAndUpdate({_id: req.params.id},consulta,{new:true});
    res.json(consulta);


    }catch (error) {
        console.log(error);
    res.status(500).send("Error de conexion")
    }
}



