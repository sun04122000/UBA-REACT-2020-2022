import React, { useState } from 'react';

import { Link, NavLink } from 'react-router-dom';
import '../css/InitNavbar.css';

function InitNavbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/initiatives' className='navbar-logo' onClick={closeMobileMenu}>
          THEMES
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <NavLink to='education' className='nav-links' onClick={closeMobileMenu}>
              Education
            </NavLink>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <NavLink
              to='health'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Health 
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to='awareness'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Awareness
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to='technology'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Technology
            </NavLink>
          </li>  
          <li className='nav-item'>
            <NavLink
              to='other'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Other
            </NavLink>
          </li>   
           
          <li>
         
          </li>
        </ul>
      </nav>
    </>
  );
}

export default InitNavbar;