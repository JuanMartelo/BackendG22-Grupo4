const Clientes = require ('../models/Clientes');

exports.mostrarClientes = async (req,res) => {

    try{
    const clientes = await Clientes.find();
    res.json(clientes);

    } catch (error) {
        console.log(error);
        res.status(500).send("error al consultar el cliente")
    }
}

exports.agregarClientes = async (req,res) => {
    try {
        let clientes;
        clientes = new Clientes(req.body)

        await clientes.save();
        res.send(clientes);
        
    } catch (error){
        console.log(error);
        res.status(500).send("error al agregar cliente");
    }
}

exports.mostrarunCliente = async (req,res) => {

    try {
        let cliente = await Clientes.findById(req.params.id);

    if (!cliente) {
        res.status(404).json({msg: "no existe cliente"});
    } 

    res.send(cliente);

    }catch (error) {
        console.log(error);
    res.status(500).send("No se encuentra el cliente")
    }
}

exports.eliminarCliente = async (req,res) => {

    try {
        let cliente = await Clientes.findById(req.params.id);

    if (!cliente) {
        res.status(404).json({msg: "no existe cliente"});
        return
    } 

    await Clientes.findOneAndRemove({_id:req.params.id});
    res.json({msg: "El cliente fue eliminado"})

    }catch (error) {
        console.log(error);
    res.status(500).send("Error de conexion")
    }
}
// Funcion Actualizar
exports.actualizarCliente = async (req,res) => {
    try{
        const {nombres, apellidos, documento,telefono,direccion,empresa} = req.body;
        let cliente = await Clientes.findById(req.params.id);

    if (!cliente) {
        res.status(404).json({msg: "no existe cliente"});
        return
    } 

    cliente.nombres = nombres;
    cliente.apellidos = apellidos;
    cliente.documento = documento;
    cliente.correo = correo;
    cliente.telefono = telefono;
    cliente.direccion = direccion;
        
    cliente = await Clientes.findOneAndUpdate({_id: req.params.id},clientes,{new:true});
    res.json(cliente);


    }catch (error) {
        console.log(error);
    res.status(500).send("Error de conexion")
    }
}
