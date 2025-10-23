import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const handleSignIn= () => {
        navigate("home", {replace: true});
    };
    
    return (
        <>
            <div>Login Page</div>
            <button onClick={handleSignIn}>Sign in</button>
        </>
    );
};

export default Login;
