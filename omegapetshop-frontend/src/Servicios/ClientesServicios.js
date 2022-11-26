const clientes = [
	{
		nombres: "Diego Edisson",
		apellidos: "Sarmiento Herrera",
		documento: 1234,
		telefono: 4567,
		correo: "diego@sarmiento.com"
	},
	{
		nombres: "Wilmar Orlando",
		apellidos: "Sarmiento Herrera",
		documento: 4567,
		telefono: 8912,
		correo: "wilmar@sarmiento.com"
	},
	{
		nombres: "Sofia del Carmen",
		apellidos: "Herrera Gomez",
		documento: 4527,
		telefono: 8412,
		correo: "sofia@herrera.com"
	}
]

const ClientesServicios = {};

ClientesServicios.listarClientes = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() =>{
			reject("uy no, se rompio");
		}, 2000);
	})
}

export default ClientesServicios;