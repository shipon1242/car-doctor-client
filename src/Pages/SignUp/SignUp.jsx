
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const SignUp = () => {
    const navigate =useNavigate()
    const { createUser } = useContext(AuthContext)
    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        createUser(email, password)
            .then(result => {
                const user = result.user
                navigate('/')
                console.log(user)
            }

            )
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:mr-14 mb-2 md:mb-0 w-1/2 ">

                    <img src={img} alt="" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignUp} className="card-body">
                        <h1 className="text-3xl font-bold text-center">Sign Up </h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm  Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            {/* <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label> */}
                        </div>
                        <div className="form-control mt-6">

                            <input className="btn bg-red-500 text-white" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className="text-center mb-4">Already have an account <Link className="text-orange-600 font-bold" to="/login"> Login </Link> </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;