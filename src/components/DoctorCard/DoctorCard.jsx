import { FiCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
    return (
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-5 border border-gray-100 cursor-pointer">
            {/* Image */}
            <div className="w-full flex justify-center">
                <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-32 h-32 object-cover rounded-full border-4 border-gray-100 shadow-sm"
                />
            </div>

            {/* Content */}
            <div className="mt-6 text-center space-y-1">
                {/* Availability */}
                <div className="flex items-center justify-center gap-2">
                    <FiCircle
                        className={doctor.isAvailable ? "text-green-500" : "text-gray-400"}
                        size={12}
                    />
                    <span
                        className={`text-sm font-medium ${doctor.isAvailable ? "text-green-600" : "text-gray-500"
                            }`}
                    >
                        {doctor.isAvailable ? "Available" : "Unavailable"}
                    </span>
                </div>

                {/* Name */}
                <h3 className="text-lg font-semibold text-gray-800">{doctor.name}</h3>

                {/* Specialty */}
                <p className="text-sm text-gray-500">{doctor.specialty}</p>
            </div>

            {/* Button */}
            <div className="mt-6 flex justify-center">
                <Link to={`${doctor.id}`} className="cursor-pointer px-6 py-2 text-sm rounded-full text-white bg-indigo-500 hover:bg-indigo-600 transition duration-150 ease-in-out shadow-lg">
                    Book Appointment
                </Link>
            </div>
        </div>
    );
};

export default DoctorCard;