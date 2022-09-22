import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const UserDetail = () => {

    const { id } = useParams();

    const [user, setUser] = useState([]);

    useEffect(() => {
        // fetch user by id from params
        fetch(`http://localhost:8080/api/users/${id}`)
            .then(res => res.json())
            .then(result => {
                if (result.data == null) {
                    setUser([])
                } else {
                    setUser(result.data);
                };
            })
            .catch(err => console.log(err));
    }, [id]);

    let userData,
        usertitle;

    // desactivo el aviso porque me sugiere usar '==='
    // eslint-disable-next-line
    if (id == user.id) {
        userData = <>
            <div className="text-center">
                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "18rem" }} src={`http://localhost:8080/${user.avatar}`} alt=" Foto-Usuario " />
            </div>
            <p>Nombre: {user.firstName}</p>
            <p>Apellido: {user.lastName}</p>
            <p>Email: {user.email}</p>
            {user.categoryId == 1 && <p>{user.firstName} {user.lastName} es Administrador</p>}
        </>;
        usertitle = `${user.firstName} ${user.lastName}`;
    } else {
        userData = <></>;
        usertitle = "Usuario no encontrado";
    }

    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Detalle del Usuario</h1>
            </div>

            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">{usertitle}</h5>
                    </div>
                    <div className="card-body">
                        {userData}
                        <Link className="btn btn-success" to="/users-list">Volver a lista</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserDetail;