import React, {useEffect} from 'react'
import { AboutCarousel, ContactUs, ServicesDescription, ServicesHero, ServicesInfoBlock, ServicesNav } from '../../sections'

const MetalFabricationServices = () => {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <section>
      <ServicesHero
        titleTop="Metal Fabrication"
        titleBottom="Services"
      />
      <ServicesDescription>
        <ServicesInfoBlock
          title="Metal Fabrication Services"
          description="Our metal fabrication services cover a wide range of applications, allowing us to bring our clients' visions to life. We have expertise in fabricating various metal products, including:"
        />
        <ServicesInfoBlock
          subService
          number="01"
          title="Weighbridges"
          description="Our precision-engineered weighbridges provide accurate weight measurement for a wide range of vehicles, ensuring compliance with industry standards."
          headingColor='text-[#0065E7]'
        />
        <ServicesInfoBlock
          subService
          number="02"
          title="Gratings"
          description="We specialize in the fabrication of durable and versatile gratings, including stainless steel and aluminum options, utilizing our advanced automatic grating welding machine."
          headingColor='text-[#0065E7]'
        />
        <AboutCarousel/>
        
        <ServicesInfoBlock
          subService
          number="03"
          title="Solar Panel Installation"
          description="We offer comprehensive services for the installation of solar panels, including piling solutions, bracket and support system supply, electrical installations, and more."
          headingColor='text-[#0065E7]'
        />
        <ServicesInfoBlock
          subService
          number="04"
          title="Tanks"
          description="We offer expert fabrication services for various types of tanks, designed to meet the specific needs of different industries. Our experienced team ensures the highest quality standards and adherence to industry regulations in the fabrication of tanks for storage, processing, and other applications. Whether you require storage tanks, process tanks, or specialized tanks for specific purposes, we have the expertise to deliver reliable and durable solutions."
          headingColor='text-[#0065E7]'
        />
        <ServicesInfoBlock
          subService
          number="05"
          title="Custom Metal Fabrication"
          description="Our skilled craftsmen can fabricate a wide range of customized metal products, tailored to the specific needs of our clients."
          headingColor='text-[#0065E7]'
        />
        <AboutCarousel/>
        
      </ServicesDescription>
      <ServicesNav/>
      <ContactUs/>
    </section>
  )
}

export default MetalFabricationServices