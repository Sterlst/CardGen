import React from 'react';
import { Navbar } from 'react-bootstrap';
import Logo from '../Images/Logo.svg';
import HomeIcon from '../Images/Home.svg';
import AboutIcon from '../Images/About.svg';

import './Navigationbar.css';

const Navigationbar = ()=> {

    return (
        <Navbar className='navigation-bar'>
            <Navbar.Brand className='navbar-logo'>
                <img
                    alt=""
                    src={Logo}
                /> {' '}
            </Navbar.Brand>
            <Navbar.Brand className='home-logo' href="/">
                <img
                    alt=""
                    src={HomeIcon}
                />{' '}
                Home
            </Navbar.Brand>
            <Navbar.Brand className='about-logo' href="/About">
                <img
                    alt=""
                    src={AboutIcon}
                />{' '}
                About
            </Navbar.Brand>
        </Navbar>
    )   
}

export default Navigationbar;
