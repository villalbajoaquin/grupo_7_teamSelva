import React from "react";
import GenresInDB from "../GenresInDB/GenresInDB";
import LastMovieInDB from "../LastMovieInDB/LastMovieInDB";
import MoviesInDB from "../MoviesInDB/MoviesInDB";
function ContentRowTop() {

	const moviesData = [
		{
			title: "Movies in Data Base",
			borderColor: "border-left-primary",
			value: 21,
			icon:"fa-film"
		},
		{
			title: "Total awards",
			borderColor: "border-left-success",
			value: 49,
			icon:"fa-award"
		},
		{
			title: "Actors quantity",
			borderColor: "border-left-warning",
			value: 79,
			icon:"fa-user"
		}
	]

    return(
        <div className="container-fluid">
					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
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