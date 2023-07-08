import React from 'react'
import { 
  ServicesHero, 
  ContactUs, 
  ServicesDescription, 
  ServicesInfoBlock, 
  AboutCarousel, 
  ServicesNav
} from '../../sections'

const Services = () => {
  return (
    <div>
      <ServicesHero
        titleTop="Workshop Fabrication"
        titleBottom="Services"
      />
      <ServicesDescription>
        <ServicesInfoBlock
          title="Workshop Fabrication Services"
          description="At Huzefa Engineering Services, we offer a wide range of workshop fabrication services, providing solutions for various industries. Our expertise is divided into four major categories:"
        />
        <AboutCarousel/>
      </ServicesDescription>
      <ServicesNav/>
      <ContactUs/>
    </div>
  )
}

export default Services