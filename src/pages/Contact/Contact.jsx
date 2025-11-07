import { Button } from "antd";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import contactImage from "../../assets/contact_image.png";

const Contact = () => {
    return (
        <div className="min-h-[60vh] w-full py-16 px-6 md:px-20">

            <h1 className="text-center text-3xl font-semibold text-gray-800 mb-12">
                CONTACT <span className="text-[#567DFD]">US</span>
            </h1>

            <div className="grid md:grid-cols-2 gap-10 items-center">

                <div className="flex justify-center">
                    <img
                        src={contactImage}
                        alt="contact"
                        className="md:max-w-[360px] h-ful rounded-xl shadow-md object-cover w-full max-w-xl"
                    />
                </div>

                <div className="space-y-8">

                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-3">OUR OFFICE</h2>

                        <div className="text-gray-600 space-y-2 text-sm leading-relaxed">
                            <p className="flex items-center gap-2">
                                <FiMapPin className="text-[#567DFD]" />
                                00000 Willms Station, Suite 000, Washington, USA
                            </p>
                            <p className="flex items-center gap-2">
                                <FiPhone className="text-[#567DFD]" />
                                (000) 000-0000
                            </p>
                            <p className="flex items-center gap-2">
                                <FiMail className="text-[#567DFD]" />
                                greatstackdev@gmail.com
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">
                            CAREERS AT PRESCRIPTO
                        </h2>
                        <p className="text-gray-600 text-sm mb-5">
                            Learn more about our teams and job openings.
                        </p>
                        <Button
                            size="large"
                            className="border border-gray-700 transition duration-300! hover:scale-110 rounded-md px-8 py-5 hover:shadow-lg"
                        >
                            Explore Jobs
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;