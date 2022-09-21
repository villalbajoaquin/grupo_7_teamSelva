import React from "react";
import { Link } from "react-router-dom";

function Row(props) {

    const {id, firstName, lastName, email, tickets, price} = props.rowData;

    return (
        <tr>
            <td>{id}</td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{email}</td>
            <td><Link className="btn btn-success" to={`users/${id}`}>Detalle</Link></td>
        </tr>
    )
}

export default Row;