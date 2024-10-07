import { Link } from "react-router-dom";
import useAuthContext from "../../context/AuthContext";
import SubNavbar from "../../pages/admin/partials/Navbar";


export default function Navbar() {
  const { user, logout } = useAuthContext();

  return (
    <>
    {/* <SubNavbar/> */}
      {!user ? (
        <>
          <Link
            to="/login"
            className="text-sm font-medium text-gray-700 hover:text-gray-800"
          >
            Sign in
          </Link>
          <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
          <Link
            to="/register"
            className="text-sm font-medium text-gray-700 hover:text-gray-800"
          >
            Create account
          </Link>
        </>
      ) : (
        <Link
          to="/register"
          className="text-sm font-medium text-gray-700 hover:text-gray-800"
        >
          <button onClick={logout}>Logout</button>
        </Link>
      )}
    </>
  );
}
