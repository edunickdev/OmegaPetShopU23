import imagenes from "../imgs/imagenes";

const Footer = () => {
    return (
        <div class="row mx-auto m-5">
            <div class="col-sm-6">
                <div class="card">
                    <div class="card-body mx-auto">
                        <h5 class="card-title">Siguenos en nuestras redes sociales</h5>
                        <img src={imagenes.img7} />
                        <img src={imagenes.img8} />
                        <img src={imagenes.img9} />
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Contáctenos </h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;