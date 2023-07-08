import React from 'react'
import { AboutAdditionalServices, AboutDescription, AboutInfoGraph, AboutStats, ContactUs, ServicesHero } from '../../sections'
import AboutHeadingText from '../../components/AboutHeadingText'

const About = () => {
  return (
    <div>
      <ServicesHero
        titleTop="Lorem Ipsum"
        titleBottom="Dolor Sit Amet,"
      />
      <AboutStats/>
      <AboutHeadingText
        text="Lorem ipsum dolor sit amet"
      />
      <AboutInfoGraph/>
      <ContactUs/>
    </div>
  )
}

export default About