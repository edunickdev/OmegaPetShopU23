import ClientesServicios from "../../Servicios/ClientesServicios";
import estados from "../../enumeradores/estados";
import {useEffect, useState} from "react";

const FormClients = () => {
    
    const [ listadoClientes, setListadoClientes ] = useState([]);
    const [ estado, setEstado ] = useState(estados.CARGANDO);
    const [criterio, setCriterio ] = useState("");

    const cargarClientes = async () => {
        try {
            const respuesta = await ClientesServicios.listarClientes();
            console.log(respuesta.data);
            if (respuesta.data.length > 0){
                setListadoClientes(respuesta.data);
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

    const buscarClientes = async (event) => {
        event.preventDefault();
        try {
            const respuesta = await ClientesServicios.buscarCliente(criterio);
            console.log(respuesta.data);
            if (respuesta.data.length > 0){
                setListadoClientes(respuesta.data);
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

    useEffect(() => {
        cargarClientes();
    }, [])

    const cambiarCriterio = (event) => {
        setCriterio(event.target.value);
    }

    return (
        <div className="container">
            <h3 className="mt-3">LISTA DE CLIENTES</h3>
            <form action="">
                <input type="text"  value={criterio} onChange={cambiarCriterio} id="criterio" name="criterio"/>
                <button className="btn btn-secondary" onClick={buscarClientes} id="buscar" name="buscar" >Buscar</button>
            </form>
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