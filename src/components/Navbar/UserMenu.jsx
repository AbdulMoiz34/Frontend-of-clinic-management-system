import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { message } from "antd";
import { useQueryClient } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../../store/authReducer";

const UserMenu = () => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);
    const queryClient = useQueryClient();
    const dispatch = useDispatch();

    const user = useSelector(state => state.auth.user);

    const handleLogout = async () => {
        try {
            await axios.post("/auth/logout");

            dispatch(clearUser());
            queryClient.removeQueries(["user"]);

            message.success("Logged out!");
            setOpen(false);
        } catch (err) {
            message.error("Logout failed!");
        }
    };

    useEffect(() => {
        const handler = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    if (!user) return null;

    return (
        <div className="relative" ref={menuRef}>
            <button
                onClick={() => setOpen((prev) => !prev)}
                className="flex items-center bg-white hover:bg-gray-100 transition p-1 rounded-full shadow-sm"
            >
                <img
                    src={user.imgUrl || "https://images.icon-icons.com/1378/PNG/512/avatardefault_92824.png"}
                    alt="avatar"
                    className="w-8 h-8 rounded-full object-cover"
                />
            </button>

            {open && (
                <div className="absolute right-0 mt-1 w-52 bg-white shadow-xl rounded-xl py-2 border border-gray-100 animate-fadeIn z-50">

                    <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">
                        My Profile
                    </Link>

                    <Link to="/my-appointments" className="block px-4 py-2 hover:bg-gray-100">
                        My Appointments
                    </Link>

                    <button
                        onClick={handleLogout}
                        className="block text-left w-full px-4 py-2 hover:bg-red-50 text-red-600"
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
};

export default UserMenu;
