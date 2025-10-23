import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "./authContext";

const Login = () => {
    const [user, setUser] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    
    const auth = useAuth();

    const redirectPath = location.state?.path || "";

    const handleLogin = () => {
        auth.login(user);
        navigate(redirectPath, {replace: true});
    };
    
    const handleUsernameChange = (e) => {
        setUser(e.target.value);
    };

    return (
        <>
            <div>Enter username</div>
            <input type="text" value={user} onChange={handleUsernameChange}/>
            <button onClick={handleLogin}>Sign in</button>
        </>
    );
};

export default Login;
