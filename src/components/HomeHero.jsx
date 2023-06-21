import React from 'react'
import Hero from '../assets/hero-image.png'

const HomeHero = () => {
  return (
    <section>
      <div className="w-[clamp(270px,80vw,1300px)] mx-auto flex flex-col lg:flex-row gap-x-6 pt-14 gap-y-7">
        <article className="w-full lg:max-w-[550px] max-[1300px]:max-w-[600px] flex md:justify-end items-center">
          <h2 className="text-[clamp(3.5rem,6vw,6rem)] leading-[clamp(3.5rem,6vw,6rem)] font-semibold text-black">
            Leaders In <br/> 
            <span className="text-[#0065E7]">
              Business <br/> Growth
            </span>
          </h2>
        </article>
        <article className="flex-1 flex flex-col lg:flex-row items-center gap-x-8 gap-y-7 pb-12 md:pb-0">
          <img className="w-full max-w-[350px] lg:h-[600px] max-[1300px]:h-700px object-cover" src={Hero} alt="Hero Image" />
          <p className="lg:text-xl max-[1300px]:text-2xl lg:max-w-[250px]">
            In today's business, customer satisfaction is of utmost importance. Keeping this fact in mind, we at Huzefa Engineering Services (HES) assist our customers in any way we can.
          </p>
        </article>
      </div>
    </section>
  )
}

export default HomeHero