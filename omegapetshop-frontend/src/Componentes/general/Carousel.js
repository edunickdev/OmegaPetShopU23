import imagenes from "../../imgs/imagenes";


const Carousel = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={imagenes.img1} className="d-block w-100" alt="imagenes" height={500} />
                </div>
                <div className="carousel-item">
                    <img src={imagenes.img2} className="d-block w-100" alt="imagen" height={500}/>
                </div>
                <div className="carousel-item">
                    <img src={imagenes.img3} className="d-block w-100" alt="imgs" height={500}/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </button>
        </div>
    );
}

export default Carousel;