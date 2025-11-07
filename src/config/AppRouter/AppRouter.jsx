import { Routes, Route } from "react-router-dom";
// import Patient from "../../layout/Patient";
// import Doctor from "../../layout/Doctor";
// import Admin from "../../layout/Admin";
import { MainLayout } from "../../layout";
import Home from "../../pages/Home";
import { LoginPage, SignupPage, Contact, About, NotFound, Doctors, DoctorDetails, MyAppointments, PatientProfile } from "../../pages";
import { ProtectedRoute } from "../../components";

const AppRouter = () => {
    return (
        <Routes>
            {/* Public Routes */}
            <Route element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/doctors/:docId" element={<DoctorDetails />} />
                < Route path="*" element={<NotFound />} />
            </Route>

            <Route element={<ProtectedRoute allowedRoles={["patient"]} />}>
                <Route path="/my-appointments" element={<MyAppointments />} />
                <Route path="/profile" element={<PatientProfile />} />
            </Route>

            {/* <Route path="/" element={<Home />} />
            <Route path="/login" element={< LoginPage />} />
            <Route path="/signup" element={< SignupPage />} /> */}
            {/* <Route path="/" element={<Patient />} /> */}
            {/* <Route path="/doctors" element={<Doctor />} /> */}
            {/* <Route path="/admin" element={<Admin />} /> */}
        </Routes >
    );
}

export default AppRouter;