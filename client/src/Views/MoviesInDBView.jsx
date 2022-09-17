import React from "react";
import MoviesInDB from "../Components/MoviesInDB/MoviesInDB";

class MoviesInDBView extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [
                {
                    title: "Movies in Data Base",
                    borderColor: "border-left-primary",
                    value: 21,
                    icon: "fa-film"
                },
                {
                    title: "Total awards",
                    borderColor: "border-left-success",
                    value: 49,
                    icon: "fa-award"
                },
                {
                    title: "Actors quantity",
                    borderColor: "border-left-warning",
                    value: 79,
                    icon: "fa-user"
                }
            ]
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Detalles de la APP</h1>
                </div>
                <div className="row">

                    {
                        this.state.movies.map(function (element, i) {
                            return <MoviesInDB key={element.title + i} data={element} />
                        })
                    }

                </div>
            </div>
        )
    }
}

export default MoviesInDBView;