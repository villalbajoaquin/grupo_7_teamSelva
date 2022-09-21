import React, { useEffect, useState } from 'react';
import Row from './Subcomponents/Row';

const ProductList = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        // fetch users
        fetch("http://localhost:8080/api/users")
            .then(res => res.json())
            .then(list => {
                if (!list.data) {
                    setUsers([])
                } else {
                    setUsers(list.data);
                };
            })
            .catch(err => console.log(err));
    }, []);

    return (

        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Usuarios Registrados</h1>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Email</th>
                        <th scope="col">Ver</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        Array.isArray(users) && users.map((element, i) => {
                            return <Row key={element.firstNname + i} rowData={element} />
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default ProductList;