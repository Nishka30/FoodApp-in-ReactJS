import { LOGO_URL } from "../utils/constants";

// Header Component
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src={LOGO_URL} // Replace with a valid logo URL
                    alt="Logo"
                />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
