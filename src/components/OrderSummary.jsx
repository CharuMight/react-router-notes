import { useNavigate } from "react-router-dom";

const OrderSummary = () => {

    const navigate = useNavigate();

    const navigateBack = () => {
        navigate(-1);
    };

    return (
        <>
            <div>Order confirmed!</div>
            <button onClick={navigateBack}>
                Go back
            </button>
        </>
    );
};

export default OrderSummary;
