import React from "react";
import Avatar from "../../Assets/images/user_1.jpg";
import { Link } from "react-router-dom";

function Topbar(){
    return(
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                  {/* <!-- Sidebar Toggle (Topbar) --> */}
                  <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                    <i className="fa fa-bars"></i>
                  </button>

                  {/* <!-- Topbar Navbar --> */}
                  <ul className="navbar-nav ml-auto">

                    {/* <!-- Nav Item - Alerts --> */}
                    <li className="nav-item dropdown no-arrow mx-1">
                      <Link className="nav-link dropdown-toggle" to="/" id="alertsDropdown">
                        <i className="fas fa-bell fa-fw"></i>                        
                      </Link>
                    </li>

                    {/* <!-- Nav Item - Messages --> */}
                    <li className="nav-item dropdown no-arrow mx-1">
                      <Link className="nav-link dropdown-toggle" to="/" id="messagesDropdown">
                        <i className="fas fa-envelope fa-fw"></i>
                      </Link>
                    </li>

                    {/* <!-- Nav Item - React --> */}
                    <li className="nav-item dropdown no-arrow mx-1">
                      <Link className="nav-link dropdown-toggle" to="/" id="messagesDropdown">
                        <i className="fab fa-react fa-fw"></i>
                      </Link>
                    </li>

                    <div className="topbar-divider d-none d-sm-block"></div>

                    {/* <!-- Nav Item - User Information --> */}
                    <li className="nav-item dropdown no-arrow">
                      <Link className="nav-link dropdown-toggle" to="/" id="userDropdown">
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">Administrador</span>
                        <img className="img-profile rounded-circle" src={Avatar} alt="Administrador" width="60" />
                      </Link>
                    </li>

                  </ul>

                </nav>
    )
}

export default Topbar;