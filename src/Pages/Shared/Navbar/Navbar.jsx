import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg"
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
    const {user,logOut}=useContext(AuthContext)
    const navItems = <>
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/about">About</Link> </li>
        {user&&<li> <Link to="/bookings">MY Bookings</Link> </li>}
    </>
    const handleLogout =()=>{
        logOut()
        .then(()=>{})
        .catch(error=>{console.error(error)})
    }


    return (
        <div className="navbar bg-base-100 h-28 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end gap-4 lg:gap-6">
                {user ? <button onClick={handleLogout} className="btn bg-purple-700 text-white"> Log out</button> : <Link to="/login"> <button className="btn text-white bg-orange-600 ">Login</button></Link>}


                <button className="btn btn-outline btn-warning">Appointment</button>

            </div>
        </div>
    );
};

export default Navbar;