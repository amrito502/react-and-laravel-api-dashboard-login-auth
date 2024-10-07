import useAuthContext from "../../context/AuthContext";
import Footer from "../admin/partials/Footer";
// import Navbar from "../admin/partials/Navbar";
import SideBar from "../admin/partials/Sidebar";
import { Outlet } from 'react-router-dom';
// import "../../assets/css/styles.css";
// import "../../assets/js/scripts";
import "../../assets/js/scripts";
import "../../assets/css/styles.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.js';
import Navbar from "../../componets/Navbar/Navbar";

export default function Home() {
  const { user } = useAuthContext();
  return (
    <>



<div className="sb-nav-fixed">
    <Navbar/>
    <div id="layoutSidenav">
      <SideBar/>
      <div id="layoutSidenav_content">
        <main>
          <div class="container-fluid px-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="shadow p-4 bg-danger">
                        <h3>Logined User Informations</h3>
                            <p><strong>Name : </strong> {user?.name}</p>
                            <p><strong>Email : </strong> {user?.email}</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="shadow p-4 bg-success">
                        <h3>Task Create List</h3>
                            <p><strong>All Tasks : </strong> 300</p>
                            <p><strong>Email : </strong> {user?.email}</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="shadow p-4 bg-warning">
                        <h3>Active Users</h3>
                            <p><strong>Users : </strong> 100</p>
                            <p><strong>Email : </strong> {user?.email}</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </main>
        <Footer/>
      </div>
    </div>
</div>












      <h1>Hello, {user?.name}</h1>
    </>
  );
}
