import React from 'react'
import Buildings from "../assets/buildings-grid.png"
import PlusButton from '../components/PlusButton'
import ContactBg from "../assets/contact-bg.svg"

const SpecialitySection = () => {
  return (
    <section className="relative bg-black text-white pt-32 pb-[700px]">
        <div 
          className="w-full absolute left-0 -bottom-[76.4vw]"
        >
          <img className="w-full" src={ContactBg} alt="Contact BG"/>
        </div>
      <div className="w-[clamp(270px,80vw,1300px)] mx-auto">
        <div className="flex items-center gap-x-8">
          <article className="w-full max-w-[500px]">
            <h2 className="text-[35px] md:text-5xl font-bold pb-3 text-center md:text-left whitespace-nowrap">We Specialize In</h2>
            <div className='px-7'>
              <p className="text-wrap-balance w-full text-base md:text-2xl font-bold max-w-[500px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <ul className='text-xl font-bold list-disc pl-6 py-6'>
                <li>Heat Transfer Solutions</li>
                <li>Heat Exchangers</li>
                <li>Cooling Towers</li>
                <li>Radiators</li>
                <li>Hoppers</li>
                <li>Conveyors</li>
                <li>Bucket Elevators</li>
                <li>Weighbridges</li>
                <li>Gratings</li>
                <li>Solar Panel Installation</li>
                <li>Tanks</li>
                <li>Custom Metal Fabrication</li>
              </ul>
              <PlusButton/>
            </div>
          </article>
          <article className="hidden md:block">
            <img className="w-full max-w-[500px]  object-cover" src={Buildings} alt="Buildings"/>
          </article>
        </div>
      </div>
    </section>
  )
}

export default SpecialitySection