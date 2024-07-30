import { FaStar } from "react-icons/fa";
const ProductsCard = ({ product }) => {
    const { image, productName, price } = product
    return (
        <div className="card bg-base-100 w-96 h-[350px] lg:h-[400px]   shadow-xl ">
            <figure className="px-6 pt-8">
                <img
                    src={image}
                    alt="image"
                    className="rounded-xl h-44 lg:h-56  " />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-orange-300"><FaStar /> <FaStar /><FaStar /><FaStar /><FaStar /> </h2>
                
                <div className="card-actions flex flex-col mt-2 ">
                <p className="text-2xl font-semibold">{productName}</p>
                    <p className="text-xl text-orange-400  font-semibold mx-auto">$ 
                    {price}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;