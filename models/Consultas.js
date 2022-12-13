const mongoose = require('mongoose');

// se coloca el esquema que esta en la base de datos

const consultasSchema = mongoose.Schema({
vacuna:{
    type:String,
    require:true
},
desparacitante:{
    type:String,
    require:true
},
antipulgas:{
    type:String,
    require:true
},
enfcronica:{
    type:String,
    require:true
},
proprefiere:{
    type:String,
    require:true
},
amnesis:{
    type:String,
    require:true
}

},{ versionkey: false});

module.exports = mongoose.model('consultas',consultasSchema)