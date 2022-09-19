import React from "react";
import GenresInDB from "../GenresInDB/GenresInDB";
import LastMovieInDB from "../LastMovieInDB/LastMovieInDB";
import MoviesInDB from "../MoviesInDB/MoviesInDB";
function ContentRowTop(props) {

	const firstProduct = props.products[0];

	const moviesData = [
		{
			title: "Usuarios Registrados",
			borderColor: "border-left-primary",
			value: props.users.length,
			icon: "fa-users"
		},
		{
			title: "Eventos Cargados",
			borderColor: "border-left-success",
			value: props.products.length,
			icon: "fa-receipt"
		},
		{
			title: "Fecha Proximo Evento",
			borderColor: "border-left-warning",
			value: firstProduct.date,
			icon: "fa-calendar-alt"
		}
	]

    return(
        <div className="container-fluid">
					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Dashboard ticket-selva</h1>
					</div>
				
					{/* <!-- Content Row Movies--> */}
					<div className="row">

						{
							moviesData.map(function(element, i){
								return <MoviesInDB key={element.title + i} data={element} />
							})
						}
						
					</div>
					{/* <!-- End movies in Data Base --> */}
					
	
					{/* <!-- Content Row Last Movie in Data Base --> */}
					<div className="row">
						{/* <!-- Last Movie in DB --> */}
						<LastMovieInDB />
						{/* <!-- End content row last movie in Data Base --> */}

						{/* <!-- Genres in DB --> */}
						<GenresInDB />
					</div>
				</div>
    )
}

export default ContentRowTop;