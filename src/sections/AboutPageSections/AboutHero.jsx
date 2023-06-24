import React from 'react'
import About from "../../assets/about-bg.png"

const AboutHero = () => {
  return (
    <section className="w-[clamp(270px,90vw,1400px)] ml-auto">
      <div className="relative w-full pt-20">
        <div className="pl-8 md:pl-16 absolute top-0 left-0 text-7xl font-bold">
          <h2>
            Fabrication Lorem ipsum
          </h2>
          <h3 className="capitalize text-[#0065E7]">
            dolor sit amet,
          </h3>
        </div>
        <img src={About} alt="about us"/>
      </div>
    </section>
  )
}

export default AboutHero