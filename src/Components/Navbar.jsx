import React, { useState } from 'react';
import logo from '../images/botlogo.png'


const Navbar = () => {

    const [nav, setNav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNav(true);

        }
        else {
            setNav(false);
        }
    }


    window.addEventListener('scroll', changeBackground);

    return (
        <nav id="theNav" className={nav ? 'nav active' : 'nav'}>
            <a href="/" className="logo">

                <img src={logo} alt="" />

            </a>
            <input type="checkbox" className="menu-btn" id="menu-btn" />
            <label className='menu-icon' htmlFor='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><a href='/'>Home</a></li>
                <li><a href='/'>Features</a></li>
                {/* <li><a href='/About'>About</a></li> */}
                <li><a href='/'>Waitlist</a></li>
                {/* <li><a href='#'>Download</a></li> */}
            </ul>
        </nav>
    )
}

export default Navbar;