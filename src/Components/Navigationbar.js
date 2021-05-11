import React from 'react';
import { Navbar } from 'react-bootstrap';
import Logo from '../Images/Logo.svg';

import './Navigationbar.css';

const Navigationbar = () => {
    return (
        <Navbar className='navigation-bar'>
            <Navbar.Brand className='navbar-logo mr-auto'>
                <img
                    alt=""
                    src={Logo}
                /> {' '}
            </Navbar.Brand>
            <Navbar.Brand className='navbar-home ml-auto' href="/">
                Home
            </Navbar.Brand>
            <Navbar.Brand>
                Upcoming
            </Navbar.Brand>
            <Navbar.Brand href="/About">
                About
            </Navbar.Brand>
            <Navbar.Brand>
                Contact
            </Navbar.Brand>
        </Navbar>
    )   
}

export default Navigationbar;
