
import { Link } from "react-router-dom";


const ServiceCard = ({service}) => {
    const {img,title,price,_id}=service
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-6 pt-6">
                <img
                    src={img}
                    alt="img"
                    className="rounded-xl" />
            </figure>
            <div className="card-body  ">
                <h2 className="card-title text-2xl">{title}</h2>
                
                <div className="card-actions flex items-center justify-center">
                <p className="text-lg font-semibold text-orange-400 ">Price : ${price} </p>
                    <Link to={`/checkout/${_id}`} > <button className=" btn btn-error text-white
                     text-lg "> Book now </button> </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;