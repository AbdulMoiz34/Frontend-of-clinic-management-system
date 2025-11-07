import { NavLink } from "react-router-dom";
import ClinicLogo from "../Logo/Logo";

const Navbar = () => {
    const navLinks = [
        { name: 'HOME', to: '/' },
        { name: 'ALL DOCTORS', to: '/doctors' },
        { name: 'ABOUT', to: '/about' },
        { name: 'CONTACT', to: '/contact' },
    ];

    return (
        <nav className="py-3">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-18">

                    <div className="shrink-0">
                        <ClinicLogo />
                    </div>

                    <div className="flex space-x-8">
                        {navLinks.map((link) => (
                            <NavLink
                                to={link.to}
                                key={link.name}
                                className={({ isActive }) =>
                                    `text-sm font-medium transition duration-150 ease-in-out ${isActive
                                        ? "text-indigo-600 border-b-2 border-indigo-600 pb-1"
                                        : "text-gray-500 hover:text-indigo-600"
                                    }`
                                }>
                                {link.name}
                            </NavLink>
                        ))}
                    </div>

                    <div className="flex items-center">
                        <button
                            className="cursor-pointer px-6 py-3 rounded-4xl text-white bg-indigo-500 hover:bg-indigo-600 transition duration-150 ease-in-out shadow-lg"
                        >
                            Create account
                        </button>
                    </div>
                </div>

                <div className="border-b border-gray-300 m-auto"></div>
            </div>
        </nav>
    );
};

export default Navbar;