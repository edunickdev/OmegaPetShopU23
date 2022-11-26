import ClientesServicios from "../../Servicios/ClientesServicios";
import estados from "../../enumeradores/estados";
import {useState} from "react";

const FormClients = () => {
    
    const [ listadoClientes, setListadoClientes ] = useState([]);
    const [ estado, setEstado ] = useState(estados.CARGANDO);
    
    const cargarClientes = async () => {
            try {
                const respuesta = await ClientesServicios.listarClientes();
                console.log(respuesta);
                if (respuesta.length > 0){
                    setListadoClientes(respuesta);
                    setEstado(estados.OK);
                }
                else{
                    setEstado(estados.VACIO);
                }
            }
            catch (error) {
                setEstado(estados.ERROR);
            }
        }
    cargarClientes();
    
    return (
        <div className="container">
            <h3 className="mt-3">LISTA DE CLIENTES</h3>
            <table className="table table-sm">
                <thead>
                <tr>
                    <th>Nombres Completos</th>
                    <th>Documento</th>
                    <th>Teléfono</th>
                    <th>Correo</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                    {
                        estado === estados.CARGANDO ?
                            (<div>
                                <tr className=""><td>
                                    <div className="spinner-grow text-primary mx-2" role="status">
                                        <span className="sr-only"></span>
                                    </div>
                                    <div className="spinner-grow text-danger mx-2" role="status">
                                        <span className="sr-only"></span>
                                    </div>
                                    <div className="spinner-grow text-warning mx-2" role="status">
                                        <span className="sr-only"></span>
                                    </div>
                                </td></tr>
                            </div>)
                        :
                        estado === estados.ERROR ?
                                (<tr><td>Ocurrió un error, intente más tarde.</td></tr>)
                        :
                        estado === estados.VACIO ?
                            (<div>No hay datos</div>)
                        :
                        ClientesServicios.map((clientes) => (
                            <tr>
                                <td>{clientes.nombres + " " + clientes.apellidos}</td>
                                <td>{clientes.documento}</td>
                                <td>{clientes.telefono}</td>
                                <td>{clientes.correo}</td>
                                <td>
                                    <button className="btn btn-success mx-1">Editar</button>
                                    <button className="btn btn-danger mx-1">Eliminar</button>
                                </td>
                            </tr>
                    )) }
                </tbody>
            </table>
        </div>
    );
}

export default FormClients;