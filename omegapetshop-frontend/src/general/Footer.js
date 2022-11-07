import imagenes from "../imgs/imagenes";

const Footer = () => {
    return (
        <div className="row mx-auto m-5">
            <div className="col-sm-6">
                <div className="card">
                    <div className="card-body mx-auto">
                        <h5 className="card-title">Siguenos en nuestras redes sociales</h5>
                        <img src={imagenes.img7}  alt=""/>
                        <img src={imagenes.img8} alt=""/>
                        <img src={imagenes.img9} alt=""/>
                    </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Contáctenos </h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="/" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;