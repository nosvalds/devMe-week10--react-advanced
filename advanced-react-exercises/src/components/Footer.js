import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
    <footer>
        <nav className="nav navbar-light bg-light justify-content-center">

            <Link className="btn btn-secondary m-2" to="/01-01-lifting-state">Lifting State</Link>
            <Link className="btn btn-secondary m-2" to="/01-02-passing-data-up">Passing Data Up</Link>
            <Link className="btn btn-secondary m-2" to="/news">News</Link>
            
        </nav>
    </footer>
    )
}

export default Footer;