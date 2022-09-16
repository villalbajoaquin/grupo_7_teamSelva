import React from "react";

function Genre({ genreName = "Sin Genero" }) {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card bg-dark text-white shadow">
                <div className="card-body">
                    { genreName }
                </div>
            </div>
        </div>
    )
}

export default Genre;