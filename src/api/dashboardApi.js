import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/api";
axios.defaults.withCredentials = true;

const getDashboardSlats = async () => {
    try {
        const res = await axios.get("/admin/dashboard");
        return res.data;
    } catch (err) {
        throw err;
    }
}

export { getDashboardSlats };