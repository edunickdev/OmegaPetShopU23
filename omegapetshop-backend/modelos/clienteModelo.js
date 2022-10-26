const mongoose = require('mongoose');

const clienteSchema = mongoose.Schema({
    nombres: { type: String, maxLength: 50, required: true, unique: false},
    apellidos: { type: String, maxLength: 50, required: true, unique: false},
    documento: { type: Number, required: true, unique: true},
    telefono: {type: String, required: true, unique: false},
    correo: {type: Number, maxLength: 80, required: true, unique: true}
})

module.exports = mongoose.model("clientes", clienteSchema);
