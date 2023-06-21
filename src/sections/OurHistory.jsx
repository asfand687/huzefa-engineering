import React from 'react'
import HistorySectionTop from './HistorySectionTop'
import OurServices from './OurServices'

const OurHistory = () => {
  return (
    <section className="bg-[#3B89ED] text-white flex gap-x-6 py-10">
      <div className="w-[clamp(270px,80vw,1300px)] mx-auto">
        <HistorySectionTop/>
        <OurServices/>
      </div>
    </section>
  )
}

export default OurHistory