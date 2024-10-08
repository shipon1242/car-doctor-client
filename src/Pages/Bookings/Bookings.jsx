import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
// import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const axiosSecure = useAxiosSecure()
    // const url = `http://localhost:5000/bookings?email=${user?.email}`
    const url = `/bookings?email=${user?.email}`
    useEffect(() => {

        axiosSecure.get(url)
        .then(res => {
            console.log(res.data)
            setBookings(res.data)
        } )




        // axios.get(url, { withCredentials: true })
        //     .then(res => {
        //         console.log(res.data)
        //         setBookings(res.data)
        //     })


        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => [
        //         // console.log(data)
        //         setBookings(data)
        //     ])
    }, [url,axiosSecure])

    const handleDelete = (id) => {
        // console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                //   Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                //   });

                fetch(`https://car-doctor-server-omega-topaz.vercel.app/bookings/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        const remaining = bookings.filter(booking => booking._id !== id)
                        setBookings(remaining)
                    })

            }
        });


    }
    const handleBookingConfirm = (id) => {
        fetch(`https://car-doctor-server-omega-topaz.vercel.app/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    // update state
                    // const remaining = bookings.filter(booking=>booking._id !== id);
                    // const updated = bookings.find(booking=>booking._id == id);
                    // updated.status ="confirm"
                    // const newBookings =[updated,...remaining];
                    // setBookings(newBookings)

                    const remaining = bookings.filter(booking => booking._id !== id)
                    const updated = bookings.find(booking => booking._id == id)
                    updated.status = "confirm"
                    const newBookings = [updated, ...remaining]
                    setBookings(newBookings)


                }
            })

    }


    return (
        <div>
            <h2 className="text-4xl text-center"> </h2>
            Your Bookings: {bookings.length}

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-xl font-bold">
                            <th>

                            </th>
                            <th></th>
                            <th>Service</th>
                            <th>Price</th>
                            <th>Date </th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings.map(booking => <BookingRow key={booking._id} booking={booking} handleDelete={handleDelete} handleBookingConfirm={handleBookingConfirm} ></BookingRow>)
                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Bookings;