import React from 'react'
import SectionTitle from '../components/SectionTitle'
import ServiceBlock from '../components/ServiceBlock'

const servicesData = [
  {
    id: "01",
    title: "Fabrication",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: "02",
    title: "Maintenance",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: "03",
    title: "Fabrication",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: "04",
    title: "Maintenance",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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