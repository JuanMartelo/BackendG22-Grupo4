const mongoose = require('mongoose');

// se coloca el esquema que esta en la base de datos

const formulasSchema = mongoose.Schema({
medicamento:{
    type:String,
    require:true
},
cantidad:{
    type:String,
    require:true
},
dosis:{
    type:String,
    require:true
},
uso:{
    type:String,
    require:true
},
recomendaciones:{
    type:String,
    require:true
},

},{ versionkey: false});

module.exports = mongoose.model('formulas',formulasSchema)