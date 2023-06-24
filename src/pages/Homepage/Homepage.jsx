import React from 'react'
import {
  HomeHero,
  OurClientsSection,
  OurHistory,
  SpecialitySection,
  ContactUs
} from "../../sections"

const Homepage = () => {
  return (
    <main>
      <HomeHero/>
      <OurClientsSection/>
      <OurHistory/>
      <SpecialitySection/>
      <ContactUs/>
    </main>
  )
}

export default Homepage