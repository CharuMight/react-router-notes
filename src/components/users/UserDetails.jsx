import { useParams } from "react-router-dom";

const UserDetails = () => {
    const params = useParams();
    const userId = params.userId;

    return (
        <>
            <div>UserDetails Page</div>
            <div>Details about {userId}</div>
        </>
    );
};

export default UserDetails;
