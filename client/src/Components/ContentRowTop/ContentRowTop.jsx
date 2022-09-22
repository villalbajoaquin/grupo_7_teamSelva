import React from "react";
import ProductInDB from "../ProductInDB/ProductInDB";
import TotalCard from "../TotalCard/TotalCard";
function ContentRowTop(props) {

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
			value: props.nextShow.date,
			icon: "fa-calendar-alt"
		}
	];

    return(
        <div className="container-fluid">
					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Dashboard ticket-selva</h1>
					</div>
				
					{/* <!-- Content Row --> */}
					<div className="row">

						{
							moviesData.map(function(element, i){
								return <TotalCard key={element.title + i} data={element} />
							})
						}
						
					</div>
					
	
					{/* <!-- Content Row Last Added & Next Show in Data Base --> */}
					<div className="row">

						{/* <!-- Last Product in DB --> */}
						<ProductInDB show={props.nextShow} showType="Próximo Evento"/>

						{/* <!-- Next Product --> */}
						<ProductInDB show={props.lastAdded} showType="Ultimo Evento cargado"/>
						
					</div>
				</div>
    );
}

export default ContentRowTop;