const Citas = require ('../models/Citas');

exports.mostrarCitas = async (req,res) => {

    try{
    const citas = await Citas.find();
    res.json(citas);

    } catch (error) {
        console.log(error);
        res.status(500).send("error al consultar las clientes")
    }
}

exports.agregarCitas = async (req,res) => {
    try {
        let citas;
        citas = new Citas(req.body)

        await citas.save();
        res.send(citas);
        
    } catch (error){
        console.log(error);
        res.status(500).send("error al agregar la cita");
    }
}

exports.mostrarunaCita = async (req,res) => {

    try {
        let citas = await Citas.findById(req.params.id);

    if (!citas) {
        res.status(404).json({msg: "no existe cita"});
    } 

    res.send(citas);

    }catch (error) {
        console.log(error);
    res.status(500).send("No se encuentra la cita")
    }
}

exports.eliminarCitas = async (req,res) => {

    try {
        let citas = await Citas.findById(req.params.id);

    if (!citas) {
        res.status(404).json({msg: "no existe cita"});
        return
    } 

    await Citas.findOneAndRemove({_id:req.params.id});
    res.json({msg: "La cita fue eliminada"})

    }catch (error) {
        console.log(error);
    res.status(500).send("Error de conexion")
    }
}

// Funcion Actualizar
exports.actualizarCitas = async (req,res) => {
    try{
        const {fecha,dia, horario,nombrepropietario, nombremascota,servicio} = req.body;
        let cita = await Citas.findById(req.params.id);

    if (!cita) {
        res.status(404).json({msg: "no hay citas"});
        return
    } 

    cita.fecha = fecha;
    cita.dia = dia;
    cita.horario = horario;
    cita.nombrepropietario = nombrepropietario;
    cita.nombremascota = nombremascota;
    cita.servicio = servicio;
    
    cita = await Citas.findOneAndUpdate({_id: req.params.id},cita,{new:true});
    res.json(cita);


    }catch (error) {
        console.log(error);
    res.status(500).send("Error de conexion")
    }
}



