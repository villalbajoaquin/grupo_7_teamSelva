import React from "react";
import { Link } from "react-router-dom";

function ProductInDB(props) {

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">{props.showType}</h5>
                </div>
                <div className="card-body">
                    <h5 className="m-0 font-weight-bold text-gray-800">{props.show.name}</h5>
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "22rem" }} src={`http://localhost:8080/${props.show.imgsrc}`} alt=" Star Wars - Mandalorian " />
                    </div>
                    <p>Fecha: {props.show.date}</p>
                    <Link className="btn btn-success" to={`products/${props.show.id}`}>Detalle</Link>
                </div>
            </div>
        </div>
    )
}

export default ProductInDB;