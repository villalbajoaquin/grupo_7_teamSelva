import React, { useEffect, useState } from 'react';
import Row from './Subcomponents/Row';

const ProductList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        // fetch products
        fetch("http://localhost:8080/api/products")
            .then(res => res.json())
            .then(list => {
                if (!list.data) {
                    setProducts([])
                } else {
                    setProducts(list.data);
                };
            })
            .catch(err => console.log(err));
    }, []);

    return (

        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Detalle de la APP</h1>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Hora</th>
                        <th scope="col">Tickets</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Ver</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        Array.isArray(products) && products.map((element, i) => {
                            return <Row key={element.name + i} rowData={element} />
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default ProductList;