import { FaBriefcase, FaCheckCircle, FaEnvelope, FaEye, FaPhone, FaToggleOff, FaToggleOn, FaTrash } from "react-icons/fa";
import { MdEventBusy, MdSchedule } from "react-icons/md";

const DoctorCard = ({ doctor }) => {

    const availabilityConfig = {
        available: {
            label: 'Available',
            color: 'bg-green-100 text-green-700 border-green-300',
            icon: FaCheckCircle,
            iconColor: 'text-green-500',
            bgGradient: 'from-green-50 to-green-100'
        },
        'on-leave': {
            label: 'On Leave',
            color: 'bg-purple-100 text-purple-700 border-purple-300',
            icon: MdEventBusy,
            iconColor: 'text-purple-500',
            bgGradient: 'from-purple-50 to-purple-100'
        }
    };

    const AvailIcon = availabilityConfig[doctor.availabilityStatus].icon;

    return (
        <div
            key={doctor.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-slate-100"
        >
            {/* Header with Image */}
            <div className="relative h-48">
                <img
                    src={doctor.image}
                    alt={doctor.fullName}
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                    <span className={`px-3 py-1.5 rounded-full text-xs font-bold border-2 ${doctor.accountStatus === 'active'
                        ? 'bg-green-100 text-green-700 border-green-300'
                        : 'bg-red-100 text-red-700 border-red-300'
                        }`}>
                        {doctor.accountStatus === 'active' ? '✓ Active' : '✗ Inactive'}
                    </span>
                </div>
                <div className="absolute bottom-4 left-4">
                    <span className={`px-4 py-2 rounded-xl text-sm font-bold border-2 backdrop-blur-sm ${availabilityConfig[doctor.availabilityStatus].color}`}>
                        <AvailIcon className="inline mr-2" />
                        {availabilityConfig[doctor.availabilityStatus].label}
                    </span>
                </div>
            </div>

            {/* Doctor Info */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-1">{doctor.fullName}</h3>
                <p className="text-blue-600 font-semibold mb-4">{doctor.specialization}</p>

                {/* Quick Stats */}

                {/* Contact Info */}
                <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                        <FaBriefcase className="text-slate-400" />
                        <span>{doctor.experience} years • {doctor.qualification}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                        <FaPhone className="text-slate-400" />
                        <span>{doctor.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                        <FaEnvelope className="text-slate-400" />
                        <span className="truncate">{doctor.email}</span>
                    </div>
                </div>

                {/* Schedule Preview */}
                <div className="bg-slate-50 rounded-xl p-3 mb-4 border border-slate-200">
                    <div className="flex items-center gap-2 mb-2">
                        <MdSchedule className="text-blue-500" />
                        <p className="text-xs font-semibold text-slate-700 uppercase">Weekly Schedule</p>
                    </div>
                    <div className="flex flex-wrap gap-1">
                        {doctor.schedule.map((sched, idx) => (
                            <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-lg text-xs font-medium">
                                {sched.day.slice(0, 3)}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                    <button
                        onClick={() => setSelectedDoctor(doctor)}
                        className="flex-1 bg-blue-500 text-white py-2.5 rounded-xl hover:bg-blue-600 transition-all font-semibold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                    >
                        <FaEye /> Details
                    </button>
                    <button
                        onClick={() => toggleAccountStatus(doctor.id)}
                        className={`flex-1 py-2.5 rounded-xl transition-all font-semibold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg ${doctor.accountStatus === 'active'
                            ? 'bg-orange-500 text-white hover:bg-orange-600'
                            : 'bg-green-500 text-white hover:bg-green-600'
                            }`}
                    >
                        {doctor.accountStatus === 'active' ? <FaToggleOff /> : <FaToggleOn />}
                        {doctor.accountStatus === 'active' ? 'Disable' : 'Enable'}
                    </button>
                    <button
                        onClick={() => handleDelete(doctor)}
                        className="bg-red-500 text-white px-4 py-2.5 rounded-xl hover:bg-red-600 transition-all shadow-md hover:shadow-lg"
                    >
                        <FaTrash />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DoctorCard