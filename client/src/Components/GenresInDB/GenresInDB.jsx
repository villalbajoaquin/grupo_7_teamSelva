import React, { Component } from "react";
import Genre from "./Subcomponents/Genre";

class GenresInDB extends Component {

    constructor() {
        super();
        this.state = {
            genres: []
        }
    }

   async componentDidMount() {

    const response = await fetch("http://localhost:3001/api/genres");
    const data = await response.json();
    this.setState({ genres: data.data })

    }

    handleMouseOver = () => {
       let cardBody = document.querySelector(".body_del_genero");
       cardBody.classList.add("bg-secondary");
    }


    render() {

        return (
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 onMouseOver={this.handleMouseOver} className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
                    </div>
                    <div className="card-body body_del_genero">
                        <div className="row">


                            {
                                this.state.genres.map((genre, i) => <Genre key={ genre.name + i } genreName={ genre.name } />)
                            }

                            


    
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GenresInDB;