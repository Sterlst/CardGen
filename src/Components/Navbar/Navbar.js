import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../Images/Logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css';

const Navigationbar = () => {

    const [click, setClick] = useState(false);
    const [scroll, setScroll] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }

    const closeNav = () => {
        setClick(false);
    }

    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 85);
      }, true);
    }, []);


    return (
            <nav className={scroll ? 'navbar active' : 'navbar'}>
                <div className="navbar-container">
                    <NavLink exact to='/' className='navbar-logo'>
                        <img alt="" src={Logo} />
                    </NavLink>

                    <ul className={click ? 'navbar-menu active' : 'navbar-menu'}>
                        <li className='navbar-item' onClick={closeNav}>
                            <NavLink exact to='/' activeClassName='active' className='navbar-links'>
                                Home
                            </NavLink>
                        </li>
                        <li className='navbar-item' onClick={closeNav}>
                            <NavLink exact to='/About' activeClassName='active' className='navbar-links'>
                                About
                            </NavLink>
                        </li>
                        <li className='navbar-item' onClick={closeNav}>
                            <NavLink exact to='/Upcoming' activeClassName='active' className='navbar-links'>
                                Upcoming
                            </NavLink>
                        </li>
                        <li className='navbar-item' onClick={closeNav}>
                            <NavLink exact to='/Contact' activeClassName='active' className='navbar-links'>
                                Contact
                            </NavLink>
                        </li>
                    </ul>

                    <div className='navbar-icon' onClick={handleClick}>
                        <FontAwesomeIcon icon={click ? faTimes : faBars} />
                    </div>
                </div>
            </nav>
    )   
}

export default Navigationbar;
