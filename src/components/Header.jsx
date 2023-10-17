import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/signuo">Sign Up</NavLink>
            <NavLink to="/signin">Sign In</NavLink>
        </div>
    );
};

export default Header;