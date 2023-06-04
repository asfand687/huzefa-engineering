import React from 'react'
import HistorySectionTop from './HistorySectionTop'
import OurServices from './OurServices'

const OurHistory = () => {
  return (
    <section className="bg-[#3B89ED] text-white flex gap-x-6">
      <div className="w-full max-w-7xl mx-auto">
        <HistorySectionTop/>
        <OurServices/>
      </div>
    </section>
  )
}

export default OurHistory