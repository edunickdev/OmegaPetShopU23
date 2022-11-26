const Header = () => {
    return (
        <div className=" navbar col-md-12 bg-warning fixed-top">
          <nav className="navbar navbar-expand-lg navbar-dark bg-warning col-12">
          <a className="navbar-brand" href="/">OmegaPetShop</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/products">Productos<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Admin">Servicios</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/client">Contacto</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2 bg-light" type="search" placeholder="Buscar" />
              <button className="btn btn-outline-dark text-white bg-primary my-2 my-sm-0" type="submit">Regístrese</button>
            </form>
          </div>
        </nav>
      </div>
    );
}

export default Header;