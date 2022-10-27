const express = require('express');
const morgan = require ('morgan');
const cors = require('cors');
const mongoose = require('./conexion.js');

const app = express();
const env = process.env;
const port = env.port || 3000;
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.listen(port, () =>{
    console.log("API iniciado en el puerto " + port);
});

app.get("/",(request, response)=>{
    response.send("API iniciado para OmegaPetShop Project");
});

app.use(("/clientes", require("./rutas/clienteRutas")));
