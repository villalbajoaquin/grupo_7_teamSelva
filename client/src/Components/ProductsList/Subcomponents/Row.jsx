import React from "react";
import { Link } from "react-router-dom";

function Row(props) {

    const {id, name, date, time, tickets, price} = props.rowData;

    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{date}</td>
            <td>{time}</td>
            <td>{tickets}</td>
            <td>${price}</td>
            <td><Link className="btn btn-success" to={`products/${id}`}>Detalle</Link></td>
        </tr>
    )
}

export default Row;