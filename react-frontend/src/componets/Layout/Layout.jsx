import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import AuthLayout from "./AuthLayout";
import SubNavbar from "../../pages/admin/partials/Navbar";

export default function Layout(){
    return (
        <>
        {/* <AuthLayout> */}
            {/* <Navbar /> */}
            <SubNavbar/>
            <Outlet />

        {/* </AuthLayout> */}
        </>
    )
}