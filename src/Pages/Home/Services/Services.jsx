// import { useEffect } from "react";
// import { useState } from "react";
import ServiceCard from "./ServiceCard";
// import axios from "axios";
import useServices from "../../../hooks/useServices";


const Services = () => {

    const services =useServices()

    // const [services,setServices]=useState([])
    // useEffect(()=>{
    //     axios('http://localhost:5000/services')
    //     .then(res=>{
    //         console.log(res.data)
    //         setServices(res.data)
    //     })

        
        // fetch('http://localhost:5000/services')
        // .then(res => res.json())
        // .then(data=>{
        //     // console.log(data)
        //     setServices(data)
        // })
    // },[])
    // console.log(services)
    return (
        <div className="mt-4">
            <div className="text-center space-y-5 ">
                <h3 className="text-xl md:text-2xl font-bold text-orange-500">Services</h3>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">Our service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable.  </p>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services?.map(service=> <ServiceCard key={service._id} service={service} ></ServiceCard> )
                }
            </div>
        </div>
    );
};

export default Services;