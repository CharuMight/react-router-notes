import { Link, NavLink } from "react-router-dom";

const NavBar = () => {

    const navLinkStyle = (params) => {

        const {isActive} = params;

        return {
            fontWeight: isActive ? "bold": "normal",
            textDecoration: isActive ? "none": "underline",
        }
    };

    return (
        <nav>
            <NavLink style={navLinkStyle} to="/">Home</NavLink>
            <NavLink style={navLinkStyle} to="/about">About</NavLink>
            <NavLink style={navLinkStyle} to="/products">Products</NavLink>
            <NavLink style={navLinkStyle} to="/users">Users</NavLink>
        </nav>
    );
};

export default NavBar;