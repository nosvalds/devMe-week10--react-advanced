import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
    <footer>
        <nav className="nav navbar-light bg-light justify-content-center">

            <Link to="/01-01-lifting-state">Lifting State</Link>
        </nav>
    </footer>
    )
}

export default Footer;