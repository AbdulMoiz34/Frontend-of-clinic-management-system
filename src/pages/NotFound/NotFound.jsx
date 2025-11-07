import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">

            <h1 className="text-7xl font-bold text-[#567DFD]">404</h1>

            <h2 className="text-2xl font-semibold text-gray-800 mt-4">
                Page Not Found
            </h2>

            <p className="text-gray-500 max-w-md mt-3">
                The page you are looking for does not exist or has been moved.
                Please check the URL or return to the homepage.
            </p>

            <Link
                to="/"
                className="mt-6 inline-block bg-[#567DFD] text-white font-medium px-6 py-3 rounded-lg shadow-sm hover:bg-[#4769e6] transition-all"
            >
                Go Back Home
            </Link>

        </div>
    );
};

export default NotFound;