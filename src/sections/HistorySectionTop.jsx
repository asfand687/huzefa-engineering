import React from 'react'
import Buildings from '../assets/buildings.png'

const HistorySectionTop = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6">
      <article className="w-full max-w-[500px]">
        <h2 className="text-4xl font-bold md:font-normal md:text-6xl pb-3">Our History</h2>
        <p className="text-base font-bold md:font-normal md:text-2xl text-justify">
          Huzefa Engineering Services is a leading provider of comprehensive engineering solutions. We take pride in our vast experience and technical expertise, which enable us to deliver exceptional results on every project. With a strong focus on quality, precision, and customer satisfaction, we have built long-term relationships with esteemed clients across various industries. Our core values of professionalism, reliability, and innovation drive us to constantly improve and deliver cutting-edge solutions.
        </p>
        <div className="pt-5 md:pt-12">
          <button 
            type="button"
            className="text-2xl py-2 px-7 rounded-lg border border-white"
          >
            About Us
          </button>
        </div>
      </article>
      <article>
        <img className="w-full lg:w-[630px] lg:h-[820px] object-cover" src={Buildings} alt="Buildings"/>
      </article>
    </div>
  )
}

export default HistorySectionTop