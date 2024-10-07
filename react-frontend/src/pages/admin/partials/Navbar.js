import React from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";
import useAuthContext from "../../../context/AuthContext";
import img from "../../../assets/zamanitc.jpg";

export default function SubNavbar() {
    const { user, logout } = useAuthContext();
    const handleSidebar = () => {
        $('body').toggleClass('sb-sidenav-toggled')
    }
  return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
    
            <Link className="navbar-brand ps-3"><img className='nav_logo_cus' src={img} alt="logo" /></Link>
            <button onClick={handleSidebar} className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars"></i></button>
        
            <div className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
            <li><Link to="/register" className="btn btn-danger"><button onClick={logout}>Logout</button></Link></li>
            </div>
            <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="{BASE_URL}" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#!">Settings</a></li>
                        <li><a className="dropdown-item" href="#!">Activity Log</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        
                       
                    </ul>
                </li>
            </ul>
        </nav>
  )
}
