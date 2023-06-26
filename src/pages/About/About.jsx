import React from 'react'
import { AboutAdditionalServices, AboutDescription, AboutHero, ContactUs } from '../../sections'

const About = () => {
  return (
    <div>
      <AboutHero/>
      <AboutDescription/>
      <AboutAdditionalServices/>
      <ContactUs/>
    </div>
  )
}

export default About