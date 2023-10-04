import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header className='header'>
            <h1>SPOTIFY</h1>
            <Link to="/compte">Mon compte</Link>
        </header>
    );
};

export default Header;