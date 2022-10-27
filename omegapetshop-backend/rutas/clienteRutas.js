const clienteOperaciones = require("../operaciones/clienteOperaciones");
const router = require("express").Router(); 

router.get("/", clienteOperaciones.buscarClientes);

module.exports = router;