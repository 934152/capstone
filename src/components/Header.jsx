import React from 'react';
import logo from "../assets/Logo.svg";
import {Link} from 'react-router-dom';
import Nav from './Nav';

const Header = () => {
  return (
    <header>
     <Link to='/'> <img  src={logo} alt="logo"/></Link>
     <Nav />
    </header>
  )
}

export default Header