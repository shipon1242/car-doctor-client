import { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";


const PopularProducts = () => {
    const [products,setProducts]=useState([])

    useEffect(()=>{
        fetch("/products.json")
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
            console.log(products)
            
        })

    }
        ,[])


    return (
        <div>
           <div className="text-center space-y-5 mb-12 ">
           <h3 className="text-xl mt-12 font-bold text-orange-500 ">Popular Products</h3>
           <h1 className="text-4xl font-bold"> Browse Our Products </h1>
           <p className="w-80 lg:w-[650px] mx-auto ">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
            products.map(product=><ProductsCard key={product.id} product={product} ></ProductsCard>)
        }
        
           </div>
           <div className="text-center mt-10"><button className="btn btn-outline text-orange-400"> More Products </button></div>
        </div>
    );
};

export default PopularProducts;