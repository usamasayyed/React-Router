import React from 'react'
import logo from '../assets/hero-logo.webp'
import { NavLink,useNavigate } from 'react-router-dom'

const NavBar = () => {


const navigate= useNavigate();

  return (
    <div className=''>
        <img src={logo} alt='' width="130px"/>

        <ul className='flex justify-center gap-8 rounded-4xl bg-blue-500 mx-150 '>
        <NavLink to="/"> <li>Home</li></NavLink>
        <NavLink to="/Products"><li>Products</li></NavLink>
        <NavLink to="/About">  <li>About</li></NavLink>
        <NavLink to="/Contact"> <li>Contact</li></NavLink>
        </ul>
        <button onClick={() => navigate("/Contact")}>Get Started </button>
    </div>
  )
}

export default NavBar