import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss'

function Nav() {
    return (
        <nav className="nav">
            <Link to="/" className="nav-link">HOME</Link>
            <Link to="/about" className="nav-link">ABOUT</Link>
        </nav>
    );
}

export default Nav;