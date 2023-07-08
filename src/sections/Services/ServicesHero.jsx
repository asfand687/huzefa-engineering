import React from 'react'
import About from "../../assets/about-bg.png"

const ServicesHero = ({titleTop, titleBottom}) => {
  return (
    <section className="w-full md:w-[clamp(270px,90vw,1400px)] md:ml-auto md:pt-20">
      <div className="relative  pt-20">
        <div className="md:pl-16 absolute w-full flex justify-center top-0 left-0 text-4xl md:text-7xl font-bold">
          <div className="w-[clamp(270px,90vw,1400px)] mx-auto">
            <h2 className="max-w-[200px] md:max-w-full">
              {titleTop}
            </h2>
            <h3 className="max-w-[200px] md:max-w-full capitalize text-[#0065E7]">
              {titleBottom}
            </h3>
          </div>
        </div>
        <img className="w-full h-[500px] object-cover md:h-full" src={About} alt="about us"/>
      </div>
    </section>
  )
}

export default ServicesHero