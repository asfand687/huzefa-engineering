import React from 'react'
import Hero from '../assets/hero-image.png'

const HomeHero = () => {
  return (
    <section>
      <div className="w-full max-w-7xl mx-auto flex gap-x-6 pt-14">
        <article className="w-full max-w-[600px] flex justify-end items-center">
          <h2 className="text-8xl font-semibold text-black">
            Leaders In <br/> 
            <span className="text-[#0065E7]">
              Business <br/> Growth
            </span>
          </h2>
        </article>
        <article className="flex-1 flex items-center gap-x-8">
          <img className="w-[350px] h-700px object-contain" src={Hero} alt="Hero Image" />
          <p className="text-2xl max-w-[250px]">
            In today's business, customer satisfaction is of utmost importance. Keeping this fact in mind, we at Huzefa Engineering Services (HES) assist our customers in any way we can.
          </p>
        </article>
      </div>
    </section>
  )
}

export default HomeHero