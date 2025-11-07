import { Button } from "antd";
import group_profiles from "../../assets/group_profiles.png";
import doc_header_img from "../../assets/doc-header-img.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <section className="mt-6 rounded-lg bg-[#567DFD] text-white overflow-hidden">
            <div className="mx-auto flex flex-col md:flex-row items-center px-6 md:px-10 lg:px-16 py-12 md:py-16">
                <div className="w-full md:w-1/2 space-y-4 flex flex-col items-center md:block">
                    <h1 className="text-center sm:text-start text-4xl sm:text-4xl lg:text-5xl font-bold sm:font-extrabold leading-tight">
                        Book Appointment <br />
                        <span className="text-white">With Trusted Doctors</span>
                    </h1>

                    <div>
                        <img src={group_profiles} alt="doctor profiles image" />
                    </div>

                    <p className="text-lg text-gray-100 max-w-md leading-relaxed">
                        Simply browse through our extensive list of trusted doctors and
                        schedule your appointment hassle-free.
                    </p>

                    <Link to="/doctors">
                        <Button
                            type="primary"
                            size="large"
                            className="bg-white! text-[#567DFD]! hover:text-black! border-none! text-sm! hover:scale-110  transition-all duration-1000! shadow-md"
                            style={{
                                height: "44px",
                                padding: "0 28px",
                                borderRadius: "9999px",
                            }}
                        >
                            Book appointment →
                        </Button>
                    </Link>
                </div>

                <div className="top-[90px] w-full md:w-1/2 relative flex justify-center items-center">
                    <div className="flex justify-center md:justify-end items-end md:items-center z-10 space-x-4">
                        <img src={doc_header_img} alt="doctors header images" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;