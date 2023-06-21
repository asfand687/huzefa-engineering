import React from 'react'
import Logo from "../assets/logo.svg"

const Navbar = () => {
  return (
    <nav>
      <div className="py-8 w-[clamp(300px,80vw,1300px)] mx-auto flex items-center justify-between">
        <img className="w-[150px]" src={Logo} alt="Huzefa Engineering"/>
        <ul className="hidden uppercase text-lg lg:flex gap-x-24">
          <li>About Us</li>
          <li>Services</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar