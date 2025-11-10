import { useSelector } from "react-redux";

const PatientProfile = () => {
    const { user, loading: isLoading } = useSelector(state => state.auth);

    if (isLoading) return <p>Loading...</p>;

    return (
        <div>
            <h1>{user.fullName}</h1>
            <p>{user.email}</p>
        </div>
    );
}

export default PatientProfile;