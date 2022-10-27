const clienteModelo = require("../modelos/clienteModelo");
const clienteOperaciones = {};

clienteOperaciones.crearClientes = async (request, response) => {

}

clienteOperaciones.buscarClientes = async (request, response) => {
    try {
        const listaClientes = await clienteModelo.find();
        if (listaClientes.length > 0) {
            response.status(200).send(listaClientes);
        }
        else {
            response.status(404).send("No hay datos");
        }
    } catch (error) {
            response.status(400).send("Mala petición")
    }
}

clienteOperaciones.modificarClientes = async (request, response) => {

}

module.exports = clienteOperaciones;
