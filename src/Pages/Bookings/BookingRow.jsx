

const BookingRow = ({ booking,handleDelete,handleBookingConfirm }) => {
    const { _id, date, price, service, img,status } = booking

    

    return (
        <tr>
            <th>
                <button onClick={()=> handleDelete(_id)} className="btn btn-circle btn-sm">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </th>
            <td>

                <div className="avatar">
                    <div className="rounded h-24 w-24">
                        <img
                            src={img}
                            alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>


            </td>
            <td className=" text-lg font-semibold">
                {service}

            </td>
            <td className="text-base font-medium">{price}</td>
            <td className="text-base font-medium">{date}</td>
            <th>
                {
                 status ==='confirm'?<span className="text-accent font-bold"> Confirmed</span>  : <button onClick={()=>handleBookingConfirm(_id)} className="btn bg-orange-600  text-white">Confirm</button>
                }
            </th>
        </tr>
    );
};

export default BookingRow;