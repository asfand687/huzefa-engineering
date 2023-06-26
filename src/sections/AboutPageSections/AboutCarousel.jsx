import React from 'react'
import About from "../../assets/about-bg.png"
import Arrows from "../../assets/arrows.svg"


const AboutCarousel = () => {
  return (
    <div className="w-full md:w-[clamp(270px,90vw,1400px)] ml-auto relative text-white">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 md:opacity-20"></div>
      <img className="w-full h-[400px] md:h-full object-cover" src={About}/>
      <div className="absolute bottom-12 left-0 w-full px-8 md:px-14 flex items-center justify-between">
        <article className="flex items-baseline">
          <span className="text-5xl font-bold">1</span>
          <span className="text-lg font-bold">/2</span>
        </article>
        <article>
          <img className="w-[80px]" src={Arrows} alt="Arrows"/>
        </article>
      </div>
    </div>
  )
}

export default AboutCarousel