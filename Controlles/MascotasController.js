const Mascotas = require ('../models/Mascotas');

exports.mostrarMascotas = async (req,res) => {

    try{
    const mascotas = await Mascotas.find();
    res.json(mascotas);

    } catch (error) {
        console.log(error);
        res.status(500).send("error al consultar la mascota")
    }
}

exports.agregarMascotas = async (req,res) => {
    try {
        let mascotas;
        mascotas = new Mascotas(req.body)

        await mascotas.save();
        res.send(mascotas);
        
    } catch (error){
        console.log(error);
        res.status(500).send("error al agregar una mascota");
    }
}

exports.mostrarunaMascota = async (req,res) => {

    try {
        let mascotas = await Mascotas.findById(req.params.id);

    if (!mascotas) {
        res.status(404).json({msg: "no existe mascota"});
    } 

    res.send(mascotas);

    }catch (error) {
        console.log(error);
    res.status(500).send("No se encuentra la mascota")
    }
}

exports.eliminarMascotas = async (req,res) => {

    try {
        let mascotas = await Mascotas.findById(req.params.id);

    if (!mascotas) {
        res.status(404).json({msg: "no existe mascota"});
        return
    } 

    await Mascotas.findOneAndRemove({_id:req.params.id});
    res.json({msg: "La mascota fue eliminada"})

    }catch (error) {
        console.log(error);
    res.status(500).send("Error de conexion")
    }
}

// Funcion Actualizar
exports.actualizarMascotas = async (req,res) => {
    try{
        const {nombre,sexo,raza,especie,peso,edad,historiaclinica,observaciones} = req.body;
        let mascota = await Mascotas.findById(req.params.id);

    if (!mascota) {
        res.status(404).json({msg: "no hay mascota"});
        return
    } 

    mascota.nombre = nombre;
    mascota.sexo = sexo;
    mascota.raza = raza;
    mascota.especie = especie;
    mascota.peso = peso;
    mascota.edad = edad;
    mascota.historiaclinica = historiaclinica;
    mascota.observaciones = observaciones;
    
    mascota = await Mascotas.findOneAndUpdate({_id: req.params.id},mascota,{new:true});
    res.json(mascota);


    }catch (error) {
        console.log(error);
    res.status(500).send("Error de conexion")
    }
}


