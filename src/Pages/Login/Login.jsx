
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg"
import useAuth from "../../hooks/useAuth";
// import { useContext } from "react";
// import { AuthContext } from "../../Provider/AuthProvider";
// import axios from "axios";
const Login = () => {
    // const { signIn } = useContext(AuthContext)
    const {signIn}=useAuth()
    const location = useLocation()
    console.log(location)
    const navigate = useNavigate()
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;
        // console.log( email, password)

        signIn(email, password)
            .then(result => {
                const loggedInUser = result.user
                console.log(loggedInUser)

                // const user = { email }
                navigate(location?.state ? location.state : '/')

             
                 
            })

        // .catch(error => {
        //     console.error(error)
        // })

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:mr-14 mb-2 md:mb-0 w-1/2 ">

                    <img src={img} alt="" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-3xl font-bold text-center">Login </h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">

                            <input className="btn bg-red-500 text-white" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className="text-center mb-4">New to car doctors <Link className="text-orange-600 font-bold" to="/signup"> Sign Up </Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;