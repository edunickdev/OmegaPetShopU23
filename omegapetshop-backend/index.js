const express = require('express');
const morgan = require ('morgan');
const cors = require('cors');
const mongoose = require('./conexion');

const app = express();
const env = process.env;
const port = env.port || 8080;
app.use(morgan('dev'));
app.use(cors());

app.listen(port, () =>{
    console.log("API iniciado en el puerto " + port);
});

app.get("/",(request, response)=>{
    response.send("API iniciado para OmegaPetShop Project");
});

app.use(("/clientes", require("./rutas/ClienteRutas")));
