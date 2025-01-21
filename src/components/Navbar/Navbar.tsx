import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/092122_cj_profile_512x512.png";
import "./Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="It's my face!" />
                </Link>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                <li>
                    <Link to="/" onClick={() => setIsOpen(false)}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about" onClick={() => setIsOpen(false)}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/projects" onClick={() => setIsOpen(false)}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="/resume" onClick={() => setIsOpen(false)}>
                        Resume
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
