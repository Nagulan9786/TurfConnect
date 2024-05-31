import React from 'react';
import './Navbar.css';
import { GiAmericanFootballHelmet } from "react-icons/gi";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
      <GiAmericanFootballHelmet />
        <p>TURFCONNECT</p>
      </div>
      <ul className='nav-menu'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/Product'>Programs</Link>
        </li>
        <li>
          <Link to='/Aboutus'>AboutUs</Link>
        </li>
        <li>
          <Link to='/Contact'>Contact</Link>
        </li>
      </ul>
      <div className='nav-login'>
        <Link to='/Login'>
          <button>Login</button>
        </Link>
        
      </div>
    </div>
  );
}

export default Navbar;
