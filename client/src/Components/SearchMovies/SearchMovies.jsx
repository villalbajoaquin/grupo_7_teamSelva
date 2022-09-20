import React, { useState, useEffect, useRef } from 'react';

function SearchMovies(){

	const [movies, setMovies] = useState([]);
	const [keyword, setKeyword] = useState("avatar");
	
	const searchValue = useRef();
	// Credenciales de API
	const apiKey = '7e31b006'; // Intenta poner cualquier cosa antes para probar

	useEffect(() => {
		// fetch
		fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${keyword}`)
		.then(function(response) {
			return response.json();
		})
		.then(function(movies) {
			
			if(!movies.Search){
				setMovies([])
			} else {
				setMovies(movies.Search)
			}
		})
		.catch(error => console.error(error));
		//le cambiamos el estado a movies
	},[keyword])


	const handleSubmit = (e) => {
		e.preventDefault();
		//let keyword = searchValue.current.value;
		setKeyword(searchValue.current.value);

		/* fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${keyword}`)
		.then(response => response.json())
		.then(movies => {
			if(!movies.Search){
				setMovies([])
			} else {
				setMovies(movies.Search)
			}
		}) */
	}

	return(
		<div className="container-fluid">
			{
				apiKey !== '' ?
				<>
					<div className="row my-4">
						<div className="col-12 col-md-6">
							{/* Buscador */}
							<form method="GET" onSubmit={handleSubmit}>
								<div className="form-group">
									<label htmlFor="">Buscar por título:</label>
									<input type="text" className="form-control" ref={ searchValue } />
								</div>
								<button className="btn btn-info" >Search</button>
							</form>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h2>Películas para la palabra: {keyword}</h2>
						</div>
						{/* Listado de películas */}
						{
							movies.length > 0 && movies.map((movie, i) => {
								return (
									<div className="col-sm-6 col-md-3 my-4" key={i}>
										<div className="card shadow mb-4">
											<div className="card-header py-3">
												<h5 className="m-0 font-weight-bold text-gray-800">{movie.Title}</h5>
											</div>
											<div className="card-body">
												<div className="text-center">
													<img 
														className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
														src={movie.Poster}
														alt={movie.Title} 
														style={{ width: '90%', height: '400px', objectFit: 'cover' }} 
													/>
												</div>
												<p>{movie.Year}</p>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
					{ movies.length === 0 && <div className="alert alert-warning text-center">No se encontraron películas</div>}
				</>
				:
				<div className="alert alert-danger text-center my-4 fs-2">Eyyyy... ¿PUSISTE TU APIKEY?</div>
			}
		</div>
	)
}

export default SearchMovies;
