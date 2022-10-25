const express = require("express");

const app = express();
const env = process.env;
const port = env.port || 3000;

app.listen(port, () =>{
    console.log("API iniciado en el puerto "+ port);
});

app.get("/",(request, response)=>{
    response.send("Hola Mundo, Bienvenidos");
});


