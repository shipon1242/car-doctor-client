import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";


const CheckOut = () => {
    const { user } = useContext(AuthContext)
    const service = useLoaderData()
    const { title, _id, price, img } = service

    const handleOrder = (e) => {
        e.preventDefault()
        const form = e.target
        const name = user?.displayName || form.name.value;
        const date = form.date.value;
        const email = user?.email || form.email.value
        const due = form.due.value
        const message = form.message.value
        const order = {
            customerName: name,
            email,
            date,
            due,
            price,
            img: img,
            service: title,
            service_id: _id,
            prices: price,
            message,


        }
        console.log(order)

        axios.post('https://car-doctor-server-omega-topaz.vercel.app/bookings',order,{withCredentials:true})
        .then(res=>{
            console.log(res.data)
            if (res.data.insertedId) {
                Swal.fire({
                    title: "Order confirmed!",
                    text: "You clicked the button!",
                    icon: "success"
                });
            }
        })


        // fetch('http://localhost:5000/bookings', {
        //     method: "POST",
        //     headers: {
        //         "content-type": "application/json"

        //     },
        //     body: JSON.stringify(order)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         if (data.insertedId) {
        //             Swal.fire({
        //                 title: "Order confirmed!",
        //                 text: "You clicked the button!",
        //                 icon: "success"
        //             });
        //         }
        //     })


    }


    return (
        <div>
            <h2 className="text-center text-xl mb-6 font-semibold"><span className="text-orange-400 text-3xl">service Book:</span>  {title} </h2>
            <div className="hero bg-base-200 lg:py-24 ">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
                        <form onSubmit={handleOrder} className="card-body">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div className="form-control  ">

                                    <input type="text" defaultValue={user?.displayName} name="name" placeholder=" Name" className="input w-72 lg:w-[450px] h-14 lg:h-16 input-bordered " required />
                                </div>
                                <div className="form-control">

                                    <input type="email" placeholder="Email"
                                        name="email" defaultValue={user?.email} className="input input-bordered  lg:w-[450px] h-14 lg:h-16" required />

                                </div><div className="form-control">

                                    <input type="date" name="date" placeholder="Date" className="input input-bordered  lg:w-[450px] h-14 lg:h-16" required />
                                </div>
                                <div className="form-control">

                                    <input type="text" defaultValue={'$' + price} placeholder="Due Amount" name="due" className="input input-bordered  lg:w-[450px] h-14 lg:h-16" required />

                                </div>
                                <div className="form-control lg:col-span-2 ">

                                    <input type="text" name="message" placeholder="Your Message" className="input input-bordered   h-36 lg:h-60 pb-20 lg:pb-40" required />

                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn  btn-error text-white text-lg font-semibold">Booking </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;