import { useState } from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import { MdOutlineInfo, MdVerified } from "react-icons/md";

const DoctorDetails = () => {
    // Demo doctor data (replace later with API)
    const doctor = {
        name: "Dr. Richard James",
        specialty: "General physician",
        about:
            "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
        image: "https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc1.png",
    };

    const dates = [
        { day: "THU", date: 6 },
        { day: "FRI", date: 7 },
        { day: "SAT", date: 8 },
        { day: "SUN", date: 9 },
        { day: "MON", date: 10 },
        { day: "TUE", date: 11 },
        { day: "WED", date: 12 },
    ];

    const timeSlots = ["10:00", "10:30", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30"];

    const [selectedDate, setSelectedDate] = useState(2);
    const [selectedTime, setSelectedTime] = useState(null);

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">

            <div className="flex flex-col sm:flex-row gap-8">
                {/* Left Image Box */}
                <div className="bg-[#6277FF] rounded-2xl flex justify-center items-center p-6">
                    <img src={doctor.image} alt={doctor.name} className="w-full relative top-6 drop-shadow-xl" />
                </div>

                {/* Right Details */}
                <div className="border rounded-2xl p-8 space-y-4">
                    <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
                        {doctor.name} <MdVerified className="text-blue-600 text-2xl" />
                    </h1>

                    <p className="text-blue-600 text-lg">
                        {doctor.specialty}
                    </p>

                    <div className="pt-2">
                        <p className="font-semibold text-gray-800 flex items-center gap-2">
                            About <MdOutlineInfo />
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            {doctor.about}
                        </p>
                    </div>
                </div>
            </div>

            {/* Booking Section */}
            <div className="mt-12">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Booking slots</h2>

                {/* Date Selector */}
                <div className="flex gap-4 overflow-x-auto pb-2">
                    {dates.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedDate(index)}
                            className={`rounded-full w-20 h-20 flex flex-col justify-center items-center border transition 
                ${selectedDate === index
                                    ? "bg-[#6277FF] text-white border-[#6277FF]"
                                    : "bg-white text-gray-700 border-gray-300"
                                }`}
                        >
                            <span className="text-sm">{item.day}</span>
                            <span className="text-xl font-semibold">{item.date}</span>
                        </button>
                    ))}
                </div>

                {/* Time Selector */}
                <div className="flex flex-wrap gap-3 mt-6">
                    {timeSlots.map((time, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedTime(time)}
                            className={`px-6 py-2 rounded-full border text-sm transition 
                ${selectedTime === time
                                    ? "bg-[#6277FF] text-white border-[#6277FF]"
                                    : "bg-white border-gray-300 text-gray-700"
                                }`}
                        >
                            {time}
                        </button>
                    ))}
                </div>

                {/* Book Button */}
                <div className="mt-8 flex justify-center">
                    <button
                        disabled={!selectedTime}
                        className={`px-10 py-3 rounded-full text-white text-sm font-medium transition
              ${selectedTime
                                ? "bg-[#6277FF] hover:bg-[#5065e6]"
                                : "bg-gray-300 cursor-not-allowed"
                            }`}
                    >
                        Book an appointment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DoctorDetails;