import React from "react";
import Row from "./Subcomponents/Row";

function Table(props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Titulo</th>
                    <th scope="col">Duración</th>
                    <th scope="col">Rating</th>
                    <th scope="col">Genero</th>
                    <th scope="col">Premios</th>
                </tr>
            </thead>
            <tbody>
                
                {
                   Array.isArray(props.data) && props.data.map((element, i) => <Row key={element.title + i} rowData={element} />)
                }
                
            </tbody>
        </table>
    )
}

export default Table;