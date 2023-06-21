import React from 'react'
import Buildings from '../assets/buildings.png'

const HistorySectionTop = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6">
      <article className="w-full max-w-[500px]">
        <h2 className="text-4xl font-bold md:font-normal md:text-6xl pb-3">Our History</h2>
        <p className="text-base font-bold md:font-normalmd:text-2xl">
          HUZEFA ENGINEERING SERVICES (HES) is committed, as a company, to conduct its business in a responsible manner that protects public interest and provides a safe atmosphere for continuous business growth and development. By fulfilling this responsibility, HES enhances the ability to provide competitive and profitable services in the long term.
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