import React from 'react';
import fccLogo from '../../public/images/freecodecamp.jpeg'
import '../styles/navbar.css';

const Navbar = () => {
    return (
        <div className="main-nav-container">
            <div className="nav-logo-area">
                <div><img id="nav-logo"src={fccLogo} alt="fcc logo"/></div>
            </div>
        </div>
    )
}

export default Navbar