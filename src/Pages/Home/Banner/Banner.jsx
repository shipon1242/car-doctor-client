
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import img1 from "../../../assets/images/banner/1.jpg"
import img2 from "../../../assets/images/banner/2.jpg"
import img3 from "../../../assets/images/banner/3.jpg"
import img4 from "../../../assets/images/banner/4.jpg"
import img5 from "../../../assets/images/banner/5.jpg"
import img6 from "../../../assets/images/banner/6.jpg"

const Banner = () => {
    return (
        <div className="carousel w-full h-[450px] md:h-[500px] lg:h-[600px]">
            <div id="slide1" className="carousel-item relative w-full ">
                <img
                    src={img1}
                    className="w-full rounded-xl" />
                <div className="absolute rounded-xl left-0 right-1 flex items-center   top-0  gap-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full ">
                    <div className="text-white w-96 space-y-5 md:space-y-6 lg:space-y-7 ml-10 lg:ml-24 ">
                        <h2 className=" text-3xl  md:text-4xl lg:text-6xl font-bold ">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="flex gap-5 ">
                            <button className="btn bg-red-500 text-white">Discover More</button>
                            <button className="btn btn-outline  btn-ghost text-white">Latest Projects</button>
                        </div>
                    </div>

                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-4">
                    <a href="#slide6" className="btn btn-circle text-3xl font-semibold "><FaArrowLeft /></a>
                    <a href="#slide2" className="btn btn-circle text-3xl font-semibold "><FaArrowRight /></a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src={img2}
                    className="w-full rounded-xl" />
                <div className="absolute rounded-xl left-0 right-1 flex items-center   top-0  gap-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full ">
                    <div className="text-white w-96 space-y-5 md:space-y-6 lg:space-y-7 ml-10 lg:ml-24 ">
                        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold ">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="flex gap-5 ">
                            <button className="btn bg-red-500 text-white">Discover More</button>
                            <button className="btn btn-outline  btn-ghost text-white">Latest Projects</button>
                        </div>
                    </div>

                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-4">
                    <a href="#slide1" className="btn btn-circle text-3xl font-semibold "><FaArrowLeft /></a>
                    <a href="#slide3" className="btn btn-circle text-3xl font-semibold "><FaArrowRight /></a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src={img3}
                    className="w-full rounded-xl" />
                <div className="absolute rounded-xl left-0 right-1 flex items-center   top-0  gap-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full ">
                    <div className="text-white w-96 space-y-5 md:space-y-6 lg:space-y-7 ml-10 lg:ml-24 ">
                        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold ">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="flex gap-5 ">
                            <button className="btn bg-red-500 text-white">Discover More</button>
                            <button className="btn btn-outline  btn-ghost text-white">Latest Projects</button>
                        </div>
                    </div>

                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-4">
                    <a href="#slide2" className="btn btn-circle text-3xl font-semibold "><FaArrowLeft /></a>
                    <a href="#slide4" className="btn btn-circle text-3xl font-semibold "><FaArrowRight /></a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src={img4}
                    className="w-full rounded-xl" />
                <div className="absolute rounded-xl left-0 right-1 flex items-center   top-0  gap-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full ">
                    <div className="text-white w-96 space-y-5 md:space-y-6 lg:space-y-7 ml-10 lg:ml-24 ">
                        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold ">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="flex gap-5 ">
                            <button className="btn bg-red-500 text-white">Discover More</button>
                            <button className="btn btn-outline  btn-ghost text-white">Latest Projects</button>
                        </div>
                    </div>

                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-4">
                    <a href="#slide3" className="btn btn-circle text-3xl font-semibold "><FaArrowLeft /></a>
                    <a href="#slide5" className="btn btn-circle text-3xl font-semibold "><FaArrowRight /></a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img
                    src={img5}
                    className="w-full rounded-xl" />
                <div className="absolute rounded-xl left-0 right-1 flex items-center   top-0  gap-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full ">
                    <div className="text-white w-96 space-y-5 md:space-y-6 lg:space-y-7 ml-10 lg:ml-24 ">
                        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold ">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="flex gap-5 ">
                            <button className="btn bg-red-500 text-white">Discover More</button>
                            <button className="btn btn-outline  btn-ghost text-white">Latest Projects</button>
                        </div>
                    </div>

                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-4">
                    <a href="#slide4" className="btn btn-circle text-3xl font-semibold "><FaArrowLeft /></a>
                    <a href="#slide6" className="btn btn-circle text-3xl font-semibold "><FaArrowRight /></a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img
                    src={img6}
                    className="w-full rounded-xl" />
                <div className="absolute rounded-xl left-0 right-1 flex items-center   top-0  gap-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full ">
                    <div className="text-white w-96 space-y-5 md:space-y-6 lg:space-y-7 ml-10 lg:ml-24 ">
                        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold ">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="flex gap-5 ">
                            <button className="btn bg-red-500 text-white">Discover More</button>
                            <button className="btn btn-outline  btn-ghost text-white">Latest Projects</button>
                        </div>
                    </div>

                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-4">
                    <a href="#slide5" className="btn btn-circle text-3xl font-semibold "><FaArrowLeft /></a>
                    <a href="#slide1" className="btn btn-circle text-3xl font-semibold "><FaArrowRight /></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;