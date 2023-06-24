import React from 'react'
import LogoGrid from '../../components/LogoGrid'
import {CEOMessage} from '../../sections'
import SectionTitle from '../../components/SectionTitle'

const OurClientsSection = () => {
  return (
    <section className="w-[clamp(270px,80vw,1300px)] mx-auto">
      <SectionTitle
        title="Our Clients"
      />
      <LogoGrid/>
      <CEOMessage/>
    </section>
  )
}

export default OurClientsSection