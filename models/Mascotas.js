const mongoose = require('mongoose');

// se coloca el esquema que esta en la base de datos

const mascotasSchema = mongoose.Schema({
nombre:{
    type:String,
    require:true
},
sexo:{
    type:String,
    require:true
},
raza:{
    type:String,
    require:true
},
especie:{
    type:String,
    require:true
},
peso:{
    type:String,
    require:true
},
edad:{
    type:String,
    require:true
},
historiaclinica:{
    type:String,
    require:true
},
observaciones:{
    type:String,
    require:true
},

},{ versionkey: false});

module.exports = mongoose.model('mascotas',mascotasSchema)