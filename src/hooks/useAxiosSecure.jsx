import axios from "axios";
import { useEffect } from "react";
// import useAuth from "../../hooks/useAuth"
import useAuth from '../hooks/useAuth'
import { useNavigate } from "react-router-dom";
const axiosSecure = axios.create({
    baseURL: 'https://car-doctor-server-omega-topaz.vercel.app',
    withCredentials: true
})
const useAxiosSecure = () => {
    const { logOut } = useAuth()
    const navigate = useNavigate()
    // useEffect(() => {
    //     axiosSecure.interceptors.response.use(res => {
    //         return res

    //     }, error => {
    //         console.log('error tract in the interceptor', error.response)

    //         if (error.response.status === 401 || error.response.status) {
    //             console.log('logout the user ')
    //             logOut()
    //                 .then(() => {
    //                     navigate('/login')

    //                 })
    //                 .catch(error => {
    //                     console.log(error)
    //                 })
    //         }

    //     }
    //     )

    //     //     axiosSecure.interceptors.response.use(res=>{
    //     //         return res
    //     //     },error=>{
    //     //         if(error.response.status === 401 || error.response.status ===403){
    //     //             logOut()
    //     //             .then(()=>{
    //     //                 navigate('/login')
    //     //             })
    //     //         }
    //     //     }
    //     // )


    // }, [])


    return axiosSecure
};

export default useAxiosSecure;