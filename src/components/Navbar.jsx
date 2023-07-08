import React from 'react'
import Logo from "../assets/logo.svg"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className="py-8 w-[clamp(300px,80vw,1300px)] mx-auto flex items-center justify-between">
        <Link to="/">
          <img className="w-[150px]" src={Logo} alt="Huzefa Engineering"/>
        </Link>
        <ul className="hidden uppercase text-lg lg:flex gap-x-24">
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li>Contact Us</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar