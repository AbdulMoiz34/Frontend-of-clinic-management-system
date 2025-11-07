import { Navigate, Outlet } from "react-router-dom";
import { useCurrentUser } from "../../hooks/useCurrentUser";

const ProtectedRoute = ({ allowedRoles }) => {
    const { data: user, isLoading } = useCurrentUser();

    if (isLoading) return <p>Loading...</p>;

    if (!user) return <Navigate to="/login" replace />;

    if (!allowedRoles.includes(user.role))
        return <Navigate to="/login" replace />;

    return <Outlet />;
};

export default ProtectedRoute;