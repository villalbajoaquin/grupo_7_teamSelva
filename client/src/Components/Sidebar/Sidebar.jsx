import React from "react";
import Logo from "../../Assets/images/logo-prop2-modo-oscuro.png";
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <ul className="navbar-nav bg-dark sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                <div className="sidebar-brand-icon">
                    <img className="w-100" src={Logo} alt="ticket-selva" />
                </div>
            </Link>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <Link className="nav-link" to="/">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard ticket-selva</span></Link>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/* <!-- Heading --> */}
            <div className="sidebar-heading text-light">Actions</div>

            {/* <!-- Nav Item - Pages --> */}
            <li className="nav-item">
                <Link className="nav-link collapsed" to="/generos">
                    <i className="fas fa-user fa-folder"></i>
                    <span>Generos</span>
                </Link>
            </li>

            {/* <!-- Nav Item - Charts --> */}
            <li className="nav-item">
                <Link className="nav-link" to="/ultima-pelicula">
                    <i className="fas fa-film fa-chart-area"></i>
                    <span>Ultima película</span></Link>
            </li>

            {/* <!-- Nav Item - Tables --> */}
            <li className="nav-item">
                <Link className="nav-link" to="/detalles">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Detalles</span></Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/search">
                    <i className="fas fa-search"></i>
                    <span>Buscar</span></Link>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider d-none d-md-block" />
        </ul>
    )
}

export default Sidebar;