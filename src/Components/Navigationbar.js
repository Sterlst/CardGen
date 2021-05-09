import React from 'react';
import { Navbar } from 'react-bootstrap';

import './Navigationbar.css';

const Navigationbar = ()=> {

    return (
        <Navbar className='navigation-bar' expand='sm'>
            <Navbar.Brand href="/">
                <img
                    alt=""
                    src="Images/Home_Icon.png"
                />{' '}
                Home
            </Navbar.Brand>
            <Navbar.Brand href="/About">
                <img
                    alt=""
                    src="Images/About_Us_Icon.png"
                />{' '}
                About
            </Navbar.Brand>
        </Navbar>
    )   
}

export default Navigationbar;
