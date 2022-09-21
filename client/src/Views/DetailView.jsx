import React, { useEffect, useState } from 'react';

const DetailView = (props) => {

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
                <h1 className="h3 mb-0 text-gray-800">Detalle de Evento</h1>
            </div>
            <div className="row">

                {
                    products.map((/*element, i*/) => {
                        return "a"//<MoviesInDB key={element.title + i} data={element} />
                    })
                }

            </div>
        </div>
    )
};

export default DetailView;