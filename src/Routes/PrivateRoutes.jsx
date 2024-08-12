import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location =useLocation()
   
    if (loading) {
        return <div className="flex justify-center">
            <progress className="progress w-56 "></progress>
             </div>
    }
    if(user?.email){
        return children
    }

   return <Navigate state={location.pathname} to="/login"></Navigate>

};

export default PrivateRoutes;