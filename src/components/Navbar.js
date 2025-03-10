import React, { useState, useEffect } from 'react'
import './Navbar.css';
import { Link, useParams, useLocation } from 'react-router-dom';
import { Button } from './Button';



function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleclick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        }
        else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

    useEffect(() => {
        showButton();
    }, []);



    return (

        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    MARSBISTRO
                    <i class='fab fa-typo3' />
                </Link>
                <div className='menu-icon' onClick={handleclick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    {/* <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/services'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Services
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/products'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Products
                        </Link>
                    </li> */}

                    <li >
                        <Link
                            to='/sign-up'
                            className='nav-links-mobile'
                            onClick={closeMobileMenu}
                        >
                            Sign Up
                        </Link>
                        
                    </li>

                </ul>

                <Link
                            to='/sign-up'
                            // className='nav-links-mobile'
                            className='sign-up'
                            onClick={closeMobileMenu}
                        >
                            Sign Up
                        </Link>
                {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                 */}
                 {/* <Button className='sign-up'>SIGN UP</Button> */}
            </div>
        </nav>

    );
}

export default Navbar;