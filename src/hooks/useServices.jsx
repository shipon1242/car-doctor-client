import axios from "axios";
import { useEffect, useState } from "react";

const useServices = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        axios('https://car-doctor-server-omega-topaz.vercel.app/services')
        .then(res=>{
            console.log(res.data)
            setServices(res.data)
        })
    },[])
    return services
};

export default useServices;