import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getMe = async () => {
    const res = await axios.get("http://localhost:3000/api/auth/me", {
        withCredentials: true
    });
    return res.data.user;
};

export const useCurrentUser = () => {
    return useQuery({
        queryKey: ["currentUser"],
        queryFn: getMe,
        retry: false
    });
};