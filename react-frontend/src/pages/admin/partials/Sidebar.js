import React from "react";
import { Link } from "react-router-dom";
export default function SideBar() {
  return (
    <div id="layoutSidenav_nav">
      <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
        <div className="sb-sidenav-menu">
          <div className="nav">
            <a className="nav-link btn btn-warning text-black w-100 mt-5" href="/">
              <div className="sb-nav-link-icon">
                <i className="fas fa-tachometer-alt"></i>
              </div>
              Dashboard
            </a>
            <div className="sb-sidenav-menu-heading">Interface</div>
            <a
              className="nav-link collapsed"
              href="{BASE_URL}"
              data-bs-toggle="collapse"
              data-bs-target="#collapseLayouts"
              aria-expanded="false"
              aria-controls="collapseLayouts"
            >
              <div className="sb-nav-link-icon">
                <i className="fas fa-columns"></i>
              </div>
              <Link to="admin/task/add" className="nav-link text-white w-100">Task Lists</Link>
              <div className="sb-sidenav-collapse-arrow">
                <i className="fas fa-angle-down"></i>
              </div>
            </a>
        
       
       
          </div>
        </div>
       
      </nav>
    </div>
  );
}
