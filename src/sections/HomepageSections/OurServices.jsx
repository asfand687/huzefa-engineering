import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import ServiceBlock from '../../components/ServiceBlock'

const servicesData = [
  {
    id: "01",
    title: "Workshop Fabrication",
    description: "At Huzefa Engineering Services, we offer a wide range of workshop fabrication services, providing solutions for various industries. Our expertise is divided into four major categories:"
  },
  {
    id: "02",
    title: "General Order Supplies",
    description: "Under our general supplies category, we provide cost-effective solutions without compromising on quality and lead times. Our shop-in-shop concept operates within leading multinational firms, such as Procter & Gamble at its Hub and Port Qasim plants. We ensure seamless procurement and supply of a wide range of products, meeting the diverse needs of our clients."
  },
  {
    id: "03",
    title: "Bulk Movement Solutions",
    description: "Huzefa Engineering Services is your trusted partner for bulk movement solutions. We specialize in the design, fabrication, and installation of equipment essential for efficient bulk material handling. Our offerings include:"
  },
  {
    id: "04",
    title: "Metal Fabrication Services",
    description: "Our metal fabrication services cover a wide range of applications, allowing us to bring our clients' visions to life. We have expertise in fabricating various metal products, including:"
  }
]
const OurServices = () => {
  return (
    <section className="w-[clamp(270px,80vw,1300px)] py-10">
      <SectionTitle
        classes="leading-4"
        title="Our Services"
        color="#ffffff"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
        {
          servicesData.map(service => (
            <ServiceBlock
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
            />
          ))
        }
      </div>
    </section>
  )
}

export default OurServices