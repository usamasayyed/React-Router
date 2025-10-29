import React from 'react'
import logo from '../assets/hero-logo.webp'

const NavBar = () => {
  return (
    <div>
        <img src={logo} alt=''/>

        <ul>
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>

        </ul>
        <button>Get Started </button>
    </div>
  )
}

export default NavBar