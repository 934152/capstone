import React from 'react';
import logo from '../assets/Logo.svg';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
        <img src={logo} alt='logo'/>
        <div className='footer-content'>
          <nav className='footer-nav'>
            <p className='footer-head'>Navigation</p>
            <Link to='/' className='footer-item'>Home</Link>
            <a href="#" className='footer-item'>About</a>
            <a href="#" className='footer-item'>Menu</a>
            <Link to='/booking' className='footer-item'>Reservations</Link>
            <a href="#" className='footer-item'>Order Online</a>
            <a href="#" className='footer-item'>Login</a>
          </nav>
          <section className='footer-contact'>
            <p className='footer-head'>Contact</p>
            <p className='footer-item'>Address:</p>
            <p className='footer-item'>123 Little Lemon Way</p>
            <p className='footer-item'>Chicago, IL 12345</p>
            <p className='footer-item'>Phone: 123-456-7890</p>
            <p className='footer-item'>Email: mario@littlelemon.com</p>
            <div className='footer-social'>
                <p className='footer-head'>Social Media</p>
                <a href="#" className='footer-item'>Facebook</a>
                <a href="#" className='footer-item'>Instagram</a>
                <a href="#" className='footer-item'>TikTok</a>
            </div>
          </section>
        </div>
    </footer>
  )
}

export default Footer