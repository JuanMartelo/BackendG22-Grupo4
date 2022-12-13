const mongoose = require('mongoose');

// se coloca el esquema que esta en la base de datos

const citasSchema = mongoose.Schema({
fecha:{
    type:String,
    require:true
},
dia:{
    type:String,
    require:true
},
horario:{
    type:String,
    require:true
},
nombrepropietario:{
    type:String,
    require:true
},
nombremascota:{
    type:String,
    require:true
},
servicio:{
    type:String,
    require:true
}

},{ versionkey: false});

module.exports = mongoose.model('citas',citasSchema)