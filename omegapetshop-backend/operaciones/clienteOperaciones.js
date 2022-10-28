const clienteModelo = require("../modelos/clienteModelo");
const clienteOperaciones = {};

clienteOperaciones.crearClientes = async (request, response) => {
    try {
        const objeto = request.body;
        const cliente = new clienteModelo(objeto);
        const clienteGuardado = await cliente.save();
        response.status(201).send(clienteGuardado);
    } catch (error) {
        response.status(400).send("Mala petición " + error);
    }
}

clienteOperaciones.buscarClientes = async (request, response) => {
    try {
        const filtro = request.query;
        let listaClientes;
        if (filtro.q != null) {
            listaClientes = await clienteModelo.find({
                "$or": [
                {"nombres": {$regex:filtro.q, $options:"i"}},
                {"apellidos": {$regex:filtro.q, $options:"i"}}
            ]});
        } else {
            listaClientes = await clienteModelo.find(filtro);
        }
        if (listaClientes.length > 0) {
            response.status(200).send(listaClientes);
        }
        else {
            response.status(404).send("No hay datos");
        }
    } catch (error) {
            response.status(400).send("Mala petición " + error)
    }
}

clienteOperaciones.buscarCliente = async (request, response) => {
    try {
        const id = request.params.id;
        const cliente = await clienteModelo.findById(id);
        if (cliente != null) {
            response.status(200).send(cliente);
        } else {
            response.status(404).send("No hay datos");
        }
    } catch (error) {
        response.status(400).send("Mala petición. " + error);
    }
}

clienteOperaciones.modificarClientes = async (request, response) => {
    try {
        const id = request.params.id;
        const body = request.body;
        const datosActualizar = {
            nombres: body.nombres,
            apellidos: body.apellidos,
            telefono: body.telefono
        }
        const clienteActualizado = await clienteModelo.findByIdAndUpdate(id, datosActualizar, {new : true});
        if (clienteActualizado != null) {
            response.status(200).send(clienteActualizado);
        } else {
            response.status(404).send("No hay datos");
        }
    } catch (error) {
        response.status(400).send("Mala petición " + error);
    }
}

module.exports = clienteOperaciones;
