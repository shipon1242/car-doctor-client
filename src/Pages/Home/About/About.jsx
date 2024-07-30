
import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"
const About = () => {
    return (
        <div className="hero  mt-12    ">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:w-1/2 relative">
                    <img
                        src={person}
                        className="w-3/4 rounded-lg shadow-2xl" />
                    <img
                        src={parts}
                        className="w-1/2 absolute rounded-lg shadow-2xl right-16 top-1/2 border-8 border-white" />
                </div>
                <div className=" w-full lg:w-1/2 space-y-6 p-4">
                    <h3 className="text-xl md:text-2xl font-bold pb-1 lg:pb-2 text-red-400 pt-10 lg:pt-0 ">About Us</h3>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="pt-2">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.
                    </p>
                    <p className="">
                        the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.
                    </p>
                    <button className="btn bg-red-500 text-white">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;