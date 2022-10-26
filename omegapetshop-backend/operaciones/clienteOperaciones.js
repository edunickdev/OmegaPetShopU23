const clienteModelo = require("../modelos/clienteModelo")
const clienteOperaciones = {};

clienteOperaciones.crearClientes = async (request, response) => {

}

clienteOperaciones.buscarClientes = async (request, response) => {
    try {
        const listaClientes = await clienteModelo.find();
        response.status(200).send(listaClientes);             
    } catch (error) {
        response.status(400).send("Mala petición.");
    }
}

clienteOperaciones.modificarClientes = async (request, response) => {

}

module.exports = clienteOperaciones;
