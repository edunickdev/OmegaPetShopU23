const FormAdmin = () => {
    return (
        <form className="container mt-5 col-12 mx-auto">
            <div className="row mb-4 col-12 mx-auto">
                <h3 className="mx-auto">FORMULARIO DE REGISTRO</h3>
            </div>
            <div className="row col-8 mx-auto d-flex justify-content-center">
                <input type="text" className="form-control col-4 mb-3 text-center mx-1" name="documento" id="documento" placeholder="Ingrese sus nombres" />
                <input type="text" className="form-control col-4 mb-3 text-center mx-1" name="documento" id="documento" placeholder="Ingrese sus apellidos"/>
            </div>
            <div className="row mx-auto col-8 d-flex justify-content-center">
                <select className="form-control text-center col-4 mx-1">
                    <option value="">Seleccione el tipo de documento</option>
                    <option value="CC">Cédula de ciudadania</option>
                    <option value="CE">Cédula de Extranjería</option>
                    <option value="PP">Pasapórte de identidad</option>
                </select>
                <input type="text" className="form-control col-4 mb-3 text-center mx-1" name="documento" id="documento" placeholder="Número de documento" />
            </div>
            <div className="row mx-auto col-8 d-flex justify-content-center">
                <input type="text" className="form-control col-6 mx-auto mb-3 text-center" name="documento" id="documento" placeholder="Digíte su correo electrónico" />
            </div>
            <div className="row mx-auto col-8 d-flex justify-content-center">
                <input type="text" className="form-control col-6 mx-auto mb-3 text-center" name="documento" id="documento" placeholder="Escriba su dirección de residencia" />
            </div>
            <div className="row mx-auto col-8 d-flex justify-content-center mx-1">
                <select className="form-control text-center col-4">
                    <option value="">Ciudad</option>
                    <option value="1">Bogotá D.C.</option>
                    <option value="2">Medellin</option>
                    <option value="3">Cali</option>
                    <option value="4">Cartagena</option>
                    <option value="5">Barranquilla</option>
                </select>
                <input type="text" className="form-control col-4 mb-3 text-center mx-1" name="documento" id="documento" placeholder="Su número de contacto" />
            </div>
        </form>
    );
}

export default FormAdmin;