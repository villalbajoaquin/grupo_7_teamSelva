import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {

    const { id } = useParams();

    const [product, setProduct] = useState([]);

    useEffect(() => {
        // fetch product by id from params
        fetch(`http://localhost:8080/api/products/${id}`)
            .then(res => res.json())
            .then(list => {
                if (list.data == null) {
                    setProduct([])
                } else {
                    setProduct(list.data);
                };
            })
            .catch(err => console.log(err));
    }, [id]);

    let productData;

    // desactivo el aviso porque me sugiere usar '==='
    // eslint-disable-next-line
    if (id == product.id) {
        productData = <>
            <div className="text-center">
                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "18rem" }} src={`http://localhost:8080/${product.imgsrc}`} alt=" Star Wars - Mandalorian " />
            </div>
            <p>Fecha: {product.date}</p>
            <p>Horario: {product.time}</p>
            <p>Tickets: {product.tickets}</p>
            <p>Precio: $ {product.price}</p>
        </>;
    } else {
        productData = <></>;
        product.name = "Evento no encontrado";
    }

    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Detalle del Evento</h1>
            </div>

            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">{product.name}</h5>
                    </div>
                    <div className="card-body">
                        {productData}
                        <Link className="btn btn-success" to="/products-list">Volver a lista</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductDetail;