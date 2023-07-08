import React from 'react'
import AboutHeadingText from '../../components/AboutHeadingText'
import About from "../../assets/about-infograph.png"
import ServiceBlock from '../../components/ServiceBlock'

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
  }
]

const AboutInfoGraph = () => {
  return (
    <section className="bg-accent pb-10">
      <AboutHeadingText
        text="Consectetur Adipiscing Elit"
        textColor='text-white'
      />
      <div className="flex justify-center py-10">
        <img className="w-[clamp(300px,50vw,700px)]" src={About} alt="Infograph"/>
      </div>
      <div className="flex flex-col md:flex-row gap-y-8 justify-center md:gap-x-16 lg:gap-x-24">
        {
          servicesData.map(service => (
            <div key={service.id} className="w-[clamp(280px,20vw,600px)] mx-auto md:mx-0">
              <ServiceBlock
                id={service.id}
                title={service.title}
                description={service.description}
              />
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default AboutInfoGraph