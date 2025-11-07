import { Link } from "react-router-dom";
import { MdEmail, MdPhone } from "react-icons/md";
import ClinicLogo from "../Logo/Logo";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <ClinicLogo />
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        clinic helps you connect with trusted doctors, book appointments
                        easily, and manage your health records securely — all in one place.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Company</h3>
                    <ul className="space-y-2 text-gray-600">
                        <li>
                            <Link
                                to="/"
                                className="hover:text-indigo-600 transition-colors duration-150"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="hover:text-indigo-600 transition-colors duration-150"
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/delivery"
                                className="hover:text-indigo-600 transition-colors duration-150"
                            >
                                Delivery
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/privacy"
                                className="hover:text-indigo-600 transition-colors duration-150"
                            >
                                Privacy Policy
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Get In Touch
                    </h3>
                    <ul className="space-y-3 text-gray-600">
                        <li className="flex items-center gap-2">
                            <MdPhone size={18} className="text-indigo-600" />
                            <span>+92-000-0000000</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <MdEmail size={18} className="text-indigo-600" />
                            <span>contact@clinic.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-200 py-4 text-center">
                <p className="text-sm text-gray-600">
                    Copyright © {new Date().getFullYear()}
                    <span className="font-semibold text-indigo-600">clinic</span> — All
                    Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;