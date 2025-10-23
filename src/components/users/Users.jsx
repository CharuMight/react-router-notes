import { Outlet, useSearchParams } from "react-router-dom";

const Users = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    
    const getActiveUsers = () => {
        setSearchParams({filter: "active"})
    };

    const resetFilter = () => {
        setSearchParams({});
    };

    const showActiveUsers = searchParams.get("filter") === 'active';

    return (
        <div>
            <h3>User 1</h3>
            <h3>User 2</h3>
            <h3>User 3</h3>

            <Outlet />

            <div>
                <button onClick={getActiveUsers}>Active users</button>
                <button onClick={resetFilter}>Reset filter</button>
            </div>

            {showActiveUsers ? <h3>List of Active users</h3> : null}
        </div>
    );
};

export default Users;
