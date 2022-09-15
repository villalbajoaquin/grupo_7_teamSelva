import React from "react";

function Row(props) {

    return (
        <tr>
            <td>{props.rowData.id}</td>
            <td>{props.rowData.title}</td>
            <td>{props.rowData.length}</td>
            <td>{props.rowData.awards}</td>
            <td>{props.rowData.genre?.name}</td>
            <td>{props.rowData.rating}</td>
        </tr>
    )
}

export default Row;
