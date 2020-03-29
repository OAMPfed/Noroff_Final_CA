import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <Link to="/">
                <p className="navbar__link">HOME</p>
            </Link>
            <Link to="/about">
                <p className="navbar__link">ABOUT US</p>
            </Link>
            <Link to="/contact">
                <p className="navbar__link">CONTACT US</p>
            </Link>
        </div>
    );
}

export default Navbar;
