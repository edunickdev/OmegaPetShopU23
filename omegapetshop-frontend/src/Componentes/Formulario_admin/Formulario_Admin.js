const FormAdmin = () => {
    return (
        <form className="container mt-5 col-12 mx-auto">
            <div className="row mb-4 col-12 mx-auto">
                <h3 className="mx-auto">FORMULARIO DE REGISTRO</h3>
            </div>
            <div className="row col-8 mx-auto d-flex justify-content-center">
                <input type="text" className="form-control col-4 mb-3 text-center mx-1" name="nombres" id="nombres" placeholder="Ingrese sus nombres" />
                <input type="text" className="form-control col-4 mb-3 text-center mx-1" name="apellidos" id="apellidos" placeholder="Ingrese sus apellidos"/>
            </div>
            <div className="row mx-auto col-8 d-flex justify-content-center">
                <input type="text" className="form-control col-8 mx-auto mb-3 text-center" name="correo" id="correo" placeholder="Digíte su correo electrónico" />
            </div>
            <div className="row mx-auto col-8 d-flex justify-content-center mx-1">
                <input type="text" className="form-control col-8 mb-3 text-center mx-1" name="telefono" id="telefono" placeholder="Su número de contacto" />
            </div>
            <div className="d-flex justify-content-center ">
                <button className="btn btn-success mx-2">
                    CONFIRMAR
                </button>
                <a  href="/" className="btn btn-danger mx-2">
                    CANCELAR
                </a>
            </div>
        </form>
    );
}

export default FormAdmin;