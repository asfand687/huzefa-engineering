import React, { useEffect } from 'react'
import { 
  AboutCarousel, 
  ContactUs, 
  ServicesDescription, 
  ServicesHero, 
  ServicesInfoBlock, 
  ServicesNav 
} from '../../sections'

const BulkMovementSolutions = () => {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <section>
      <ServicesHero
        titleTop="Bulk Movement"
        titleBottom="Solutions"
      />
      <ServicesDescription>
        <ServicesInfoBlock
          title="Bulk Movement Solutions"
          description="Huzefa Engineering Services is your trusted partner for bulk movement solutions. We specialize in the design, fabrication, and installation of equipment essential for efficient bulk material handling. Our offerings include:"
        />
        <ServicesInfoBlock
          subService
          number="01"
          title="Hoppers"
          description="We design and fabricate hoppers to facilitate the controlled flow and storage of bulk materials in various industries."
          headingColor='text-[#0065E7]'
        />
        <ServicesInfoBlock
          subService
          number="02"
          title="Conveyors"
          description="Our conveyors are engineered to transport bulk materials safely and efficiently, optimizing production processes.."
          headingColor='text-[#0065E7]'
        />
        <ServicesInfoBlock
          subService
          number="03"
          title="Bucket Elevators"
          description="We provide reliable bucket elevators for vertical material handling, ensuring smooth and efficient movement of bulk materials."
          headingColor='text-[#0065E7]'
        />
        <AboutCarousel/>
      </ServicesDescription>
      <ServicesNav/>
      <ContactUs/>
    </section>
  )
}

export default BulkMovementSolutions