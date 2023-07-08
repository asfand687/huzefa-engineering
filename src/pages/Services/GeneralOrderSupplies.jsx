import React, {useEffect} from 'react'
import { 
  ServicesHero, 
  ServicesDescription, 
  ContactUs, 
  ServicesNav, 
  ServicesInfoBlock, 
  AboutCarousel 
} from '../../sections'

const GeneralOrderSupplies = () => {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <section>
      <ServicesHero
        titleTop="General Order"
        titleBottom="Supplies"
      />
      <ServicesDescription>
        <ServicesInfoBlock
          title="General Order Supplies"
          description="Under our general supplies category, we provide cost-effective solutions without compromising on quality and lead times. Our shop-in-shop concept operates within leading multinational firms, such as Procter & Gamble at its Hub and Port Qasim plants. We ensure seamless procurement and supply of a wide range of products, meeting the diverse needs of our clients."
        />
        <ServicesInfoBlock
          subService
          number="01"
          title="Heat Transfer Solutions"
          headingColor='text-[#0065E7]'
          description="We specialize in heat transfer solutions, including the design, fabrication, and installation of various equipment. Our offerings include:"
        />
        
        <ServicesInfoBlock
          subService
          number="02"
          title="Heat Exchangers"
          headingColor='text-[#0065E7]'
          description="We design and manufacture efficient heat exchangers to facilitate heat transfer between two fluids, ensuring optimal performance and energy efficiency."
        />
        
        <ServicesInfoBlock
          subService
          number="03"
          title="Cooling Towers"
          headingColor='text-[#0065E7]'
          description="Our cooling towers are expertly crafted to provide effective cooling solutions for industrial processes, minimizing energy consumption and maximizing performance."
        />
        <ServicesInfoBlock
          subService
          number="04"
          title="Radiators"
          headingColor='text-[#0065E7]'
          description="We fabricate high-quality radiators for efficient heat dissipation in different applications, ensuring reliable and consistent temperature regulation."
        />
        <AboutCarousel/>
      </ServicesDescription>
      <ServicesNav/>
      <ContactUs/>
    </section>
  )
}

export default GeneralOrderSupplies