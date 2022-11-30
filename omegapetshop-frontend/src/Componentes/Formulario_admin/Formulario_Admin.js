import {useState} from "react";
import clientesServicios from "../../Servicios/ClientesServicios";
import {useNavigate} from "react-router-dom";

const FormAdmin = () => {

    const Navigator = useNavigate();

    const [nombres, setNombres ] = useState("");
    const [apellidos , setApellidos ] = useState("");
    const [correo, setCorreo ] = useState("");
    const [ telefono, setTelefono ] = useState("");
    const [ contrasena, setPassword ] = useState("");
    const [ contrasenaB, setPasswordB ] = useState("");
    const [ mensajeError, setMensajeError ] = useState("");

    const password = (event) => {
        setPassword(event.target.value);
    }

    const passwordB = (event) => {
        setPasswordB(event.target.value);
    }

    const newName = (event) => {
        setNombres(event.target.value);
    }

    const newLName = (event) => {
        setApellidos(event.target.value);
    }

    const newEmail = (event) => {
        setCorreo(event.target.value);
    }

    const newNPhone = (event) => {
        setTelefono(event.target.value);
    }

    const newClient = async (event) => {
        event.preventDefault();
        if ( password === passwordB) {
            try {
                const cliente = {
                    nombres: nombres,
                    apellidos: apellidos,
                    correo: correo,
                    telefono: telefono
                }
                console.log(cliente);
                await clientesServicios.guardaCliente(cliente);
                Navigator("/Clientes");
            }
            catch (error) {
                setMensajeError("Ocurrió un error");
            }
        }
        else {
            setMensajeError("las contraseñas no coinciden.");
        }
    }

    return (
        <form className="container mt-5 col-12 mx-auto">
            <div className="row mb-4 col-12 mx-auto">
                <h3 className="mx-auto">FORMULARIO DE REGISTRO</h3>
            </div>
            <div className="row col-8 mx-auto d-flex justify-content-center">
                <input type="text" className="form-control col-4 mb-3 text-center mx-1" name="nombres" onChange={newName} value={nombres} id="nombres" placeholder="Ingrese sus nombres" />
                <input type="text" className="form-control col-4 mb-3 text-center mx-1" name="apellidos" onChange={newLName} value={apellidos} id="apellidos" placeholder="Ingrese sus apellidos"/>
            </div>
            <div className="row mx-auto col-8 d-flex justify-content-center">
                <input type="email" className="form-control col-8 mx-auto mb-3 text-center" name="correo" onChange={newEmail} value={correo} id="correo" placeholder="Digíte su correo electrónico" />
            </div>
            <div className="row mx-auto col-8 d-flex justify-content-center mx-1">
                <input type="number" className="form-control col-8 mb-3 text-center mx-1" name="telefono" onChange={newNPhone} value={telefono} id="telefono" placeholder="Su número de contacto" />
            </div>
            <div className="row mx-auto col-8 d-flex justify-content-center mx-1">
                <input type="password" className="form-control col-8 mb-3 text-center mx-1" name="password" onChange={password} value={contrasena} id="password" placeholder="Escriba su password" />
            </div>
            <div className="row mx-auto col-8 d-flex justify-content-center mx-1">
                <input type="password" className="form-control col-8 mb-3 text-center mx-1" name="passwordB" onChange={passwordB} value={contrasenaB} id="passwordB" placeholder="Confirme su password" />
            </div>
            <div className="d-flex justify-content-center">
                <button onClick={newClient} className="btn btn-success mx-2">
                    GUARDAR
                </button>
                <a  href="/" className="btn btn-danger mx-2">
                    CANCELAR
                </a>
                <div id="mensaje">{mensajeError}</div>
            </div>
        </form>
    );
}

export default FormAdmin;