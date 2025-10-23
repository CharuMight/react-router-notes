import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    const placeOrder= () => {
        navigate("order-summary");
    };
    
    return (
        <>
            <div>Home Page</div>
            <button onClick={placeOrder}>Place order</button>
        </>
    );
};

export default Home;
