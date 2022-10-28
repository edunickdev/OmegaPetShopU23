const clienteOperaciones = require("../operaciones/clienteOperaciones");
const router = require("express").Router(); 

router.get("/", clienteOperaciones.buscarClientes);
router.get("/:id", clienteOperaciones.buscarCliente);
router.post("/", clienteOperaciones.crearClientes);
router.put("/:id", clienteOperaciones.modificarClientes);
router.delete("/:id", clienteOperaciones.borrarCliente);

module.exports = router;