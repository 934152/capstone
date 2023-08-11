import React from 'react'
import logo from '../assets/Logo.svg'

const Footer = () => {
  return (
    <footer>
        <img src={logo} alt='logo'/>
        <nav>
          <ul>
          <a><li>Home</li></a>
          <a><li>About</li></a>
          <a><li>Menu</li></a>
          <a><li>Reservations</li></a>
          <a><li>Order Online</li></a>
          <a><li>Login</li></a>
          </ul>
        </nav>
        <section>
          <div className='contact'>
              <p>Address</p>
              <p>Phone Number</p>
          </div>
          <div className='socials'>
              <p>Instagram</p>
              <p>Facebook</p>
          </div>
        </section>
    </footer>
  )
}

export default Footer