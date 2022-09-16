import React from "react";
import PropTypes from "prop-types";

function MoviesInDB(props) {

    const { title, icon, value, borderColor } = props.data;
    //const { title, icon, value, borderColor } = props.data ?? {title: "", value: 0, icon: "", borderColor: "border-left-primary"}

    return (
        <div className="col-md-4 mb-4">
            <div className={`card ${borderColor} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{ title }</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{value}</div>
                        </div>
                        <div className="col-auto">
                            <i className={`fas ${icon} fa-2x text-gray-300`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

 MoviesInDB.propTypes = {
    data: PropTypes.object.isRequired
}

MoviesInDB.defaultProps = {
    data: {
        title: "No title",
        value: 0,
        icon: "fas fa-user",
        borderColor: "border-left-primary"
    }
} 

export default MoviesInDB;
