import React from "react";
import Avatar from "../../Assets/images/user_1.jpg"

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
                      <a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
                        <i className="fas fa-bell fa-fw"></i>                        
                      </a>
                    </li>

                    {/* <!-- Nav Item - Messages --> */}
                    <li className="nav-item dropdown no-arrow mx-1">
                      <a className="nav-link dropdown-toggle" href="/" id="messagesDropdown">
                        <i className="fas fa-envelope fa-fw"></i>
                      </a>
                    </li>

                    <div className="topbar-divider d-none d-sm-block"></div>

                    {/* <!-- Nav Item - User Information --> */}
                    <li className="nav-item dropdown no-arrow">
                      <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">Administrador</span>
                        <img className="img-profile rounded-circle" src={Avatar} alt="Administrador" width="60" />
                      </a>
                    </li>

                  </ul>

                </nav>
    )
}

export default Topbar;