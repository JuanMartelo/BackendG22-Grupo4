const mongoose = require('mongoose');

// se coloca el esquema que esta en la base de datos

const peluqueriasSchema = mongoose.Schema({
baño:{
    type:String,
    require:true
},
corte:{
    type:String,
    require:true
},
patologias:{
    type:String,
    require:true
},
telefono:{
    type:String,
    require:true
},
responsable:{
    type:String,
    require:true
},

},{ versionkey: false});

module.exports = mongoose.model('peluquerias',peluqueriasSchema)