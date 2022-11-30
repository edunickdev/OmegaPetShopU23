import axios from "axios";

const ClientesServicios = {};

ClientesServicios.listarClientes = () => {
		return axios.get("http://localhost:3030/clientes");
	}

ClientesServicios.buscarCliente = (criterio) => {
	return axios.get("http://localhost:3030/clientes?q="+criterio);
}

ClientesServicios.guardaCliente = (cliente) => {
	return axios.post("http://localhost:3030/clientes", cliente);
}

export default ClientesServicios;