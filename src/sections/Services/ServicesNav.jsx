import React from 'react'
import ContactBg from "../../assets/contact-bg.svg"
import { Link, useLocation } from 'react-router-dom'

const ServicesNav = () => {
  const location = useLocation()
  return (
    <section className="relative w-full bg-black pb-[clamp(300px,40vw,700px)]">
      <div 
        className="w-full absolute left-0 -bottom-[76.8vw] lg:-bottom-[76.3vw] min-[1281px]:-bottom-[75.9vw]">
        <img className="w-full" src={ContactBg} alt="Contact BG"/>
      </div>
      <div className="py-24 w-[clamp(200px,60vw,800px)] mx-auto flex flex-col items-center md:items-start">
        <h3 className="text-white font-bold text-2xl md:text-4xl text-center md:text-left">Additional Services</h3>
        <div className="pt-16 flex flex-col text-center gap-10 ">
          <Link to="/services/general-order-supplies">
            <h2 className={`max-w-[100px] md:max-w-full font-bold text-3xl md:text-6xl ${location.pathname === "/services/general-order-supplies" ?  "text-white" : "text-[#808080]"}`}>General Order Supplies</h2>
          </Link>
          <Link to="/services/bulk-movement-solutions">
            <h2 className={`max-w-[100px] md:max-w-full font-bold text-3xl md:text-6xl ${location.pathname === "/services/bulk-movement-solutions" ?  "text-white" : "text-[#808080]"}`}>Bulk Movement Solutions</h2>
          </Link>
          <h2 className="max-w-[100px] md:max-w-full text-[#808080] font-bold text-3xl md:text-6xl">Metal Fabrication Services</h2>
        </div>
      </div>
    </section>
  )
}

export default ServicesNav