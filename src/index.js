const express = require ('express');
const conectarBD = require('../config/bd');
const cors = require('cors');

//creamos el servidor
const app = express();
const port = 5000;

// enlazar la conexion
conectarBD();
app.use(cors());
app.use(express.json());

app.use ('/api/clientes', require ('../routers/clientes'));
app.use ('/api/citas', require ('../routers/citas'));
app.use ('/api/mascotas', require ('../routers/mascotas'));
app.use ('/api/consultas', require ('../routers/consultas'));
app.use ('/api/formulas', require ('../routers/formulas'));
app.use ('/api/peluquerias', require ('../routers/peluquerias'));

// mostrar un mensaje en el navegador
app.get('/' , (req,res)  => {
    res.send("Bienvenido el servidorr ya esta configurado, este se muestra en el navegador");
});



app.listen(port, () => console.log("servidor conectado al puerto", port));