import imagenes from "../../imgs/imagenes";

const Cards = () => {
    return (
        <div className="container">
        <div className="row">
            <h1 className="text-center mx-auto mt-4">NUESTROS PRODUCTOS</h1>
        </div>
        <div className="card-group">
            <div className="card m-5 shadow">
                <img src={imagenes.img4} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
            </div>
            <div className="card m-5 shadow">
                <img src={imagenes.img5} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
            </div>
            <div className="card m-5 shadow">
                <img src={imagenes.img6} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
            </div>
        </div>
        </div>
    );
}

export default Cards;