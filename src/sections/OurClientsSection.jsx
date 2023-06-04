import React from 'react'
import LogoGrid from '../components/LogoGrid'
import CEOMessage from './CEOMessage'
import OurHistory from './OurHistory'
import SectionTitle from '../components/SectionTitle'

const OutClientsSection = () => {
  return (
    <section className="w-full lg:max-w-6xl max-[1300px]:max-w-7xl mx-auto">
      <SectionTitle
        title="Our Clients"
      />
      <LogoGrid/>
      <CEOMessage/>
    </section>
  )
}

export default OutClientsSection