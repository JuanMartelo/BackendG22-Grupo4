const Peluquerias = require ('../models/Peluquerias');

exports.mostrarPeluquerias = async (req,res) => {

    try{
    const peluquerias = await Peluquerias.find();
    res.json(peluquerias);

    } catch (error) {
        console.log(error);
        res.status(500).send("error al consultar servicio de baño y peluqueria")
    }
}

exports.agregarPeluquerias = async (req,res) => {
    try {
        let peluquerias;
        peluquerias = new Peluquerias(req.body)

        await peluquerias.save();
        res.send(peluquerias);
        
    } catch (error){
        console.log(error);
        res.status(500).send("error al agregar servicio de baño y peluqueria");
    }
}

exports.mostrarunaPeluqueria = async (req,res) => {

    try {
        let peluquerias = await Peluquerias.findById(req.params.id);

    if (!peluquerias) {
        res.status(404).json({msg: "no existe servicio de baño ypeluquerias"});
    } 

    res.send(peluquerias);

    }catch (error) {
        console.log(error);
    res.status(500).send("No se encuentra servicio de baño y peluqueria")
    }
}

exports.eliminarPeluquerias = async (req,res) => {

    try {
        let peluquerias = await Peluquerias.findById(req.params.id);

    if (!peluquerias) {
        res.status(404).json({msg: "no existe servicio de baño ypeluqueria"});
        return
    } 

    await Peluquerias.findOneAndRemove({_id:req.params.id});
    res.json({msg: "El servicio de baño y peluqueria fue eliminado"})

    }catch (error) {
        console.log(error);
    res.status(500).send("Error de conexion")
    }
}

// Funcion Actualizar
exports.actualizarPeluquerias = async (req,res) => {
    try{
        const {baño,corte, patologias,telefono, responsable} = req.body;
        let peluqueria = await Peluquerias.findById(req.params.id);

    if (!peluqueria) {
        res.status(404).json({msg: "no hay servicio de baño y peluquerias"});
        return
    } 

    peluqueria.baño = baño;
    peluqueria.corte = corte;
    peluqueria.patologias = patologias;
    peluqueria.telefono = telefono;
    peluqueria.responsable = responsable;
    
    peluqueria = await Peluquerias.findOneAndUpdate({_id: req.params.id},peluqueria,{new:true});
    res.json(peluqueria);


    }catch (error) {
        console.log(error);
    res.status(500).send("Error de conexion")
    }
}



