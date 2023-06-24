import React from 'react'
import Hero from '../assets/hero-image.png'

const HomeHero = () => {
  return (
    <section>
      <div className="w-[clamp(270px,80vw,1300px)] mx-auto flex flex-col lg:flex-row gap-x-6 pt-14 gap-y-7">
        <article className="flex items-center">
          <h2 className="text-[clamp(3.5rem,6vw,6rem)] leading-[clamp(3.5rem,6vw,6rem)] font-semibold text-black">
            Leaders In <br/> 
            <span className="text-[#0065E7]">
              Business <br/> Growth
            </span>
          </h2>
        </article>
        <article className="flex-1 flex flex-col lg:flex-row items-center gap-x-8 gap-y-7 pb-12 md:pb-0">
          <img className="w-full max-w-[350px] lg:h-[600px] max-[1300px]:h-700px object-cover" src={Hero} alt="Hero Image" />
          <p className="lg:text-xl max-[1300px]:text-2xl lg:max-w-[450px]">
            Welcome to Huzefa Engineering Services Established in 1995, Huzefa Engineering Services is a trusted name in the engineering industry. With over 25 years of experience, we have earned a reputation for excellence and reliability. We provide a wide range of engineering solutions to multinational, semi-government, and private organizations, catering to their mechanical and industrial fabrication, erection, supplies, and maintenance needs. At Huzefa Engineering Services, our commitment to customer satisfaction is paramount, and we continuously strive to exceed expectations.
          </p>
        </article>
      </div>
    </section>
  )
}

export default HomeHero