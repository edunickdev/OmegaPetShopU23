const FormAdmin = () => {
    return (
        <form action="">
            <div className="row">
                <input type="text" className="form-control" name="documento" id="documento" placeholder="Ingrese su nombre completo" />
                <select name="" id="">
                    <option value="">Seleccione el tipo de documento</option>
                    <option value="CC">Cédula de ciudadania</option>
                    <option value="CE">Cédula de Extranjería</option>
                    <option value="PP">Pasapórte de identidad</option>
                </select>
            </div>
            <div className="row">

            </div>
        </form>
    );
}

export default FormAdmin;