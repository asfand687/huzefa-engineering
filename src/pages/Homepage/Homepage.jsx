import React from 'react'
import {
  HomepageHeroSection,
  HomepageClientsSection,
  HomepageOurHistorySection,
  HomepageSpecialitySection,
  HomepageContactUs
} from "../sections"

const Homepage = () => {
  return (
    <main>
      <HomepageHeroSection/>
      <HomepageClientsSection/>
      <HomepageOurHistorySection/>
      <HomepageSpecialitySection/>
      <HomepageContactUs/>
    </main>
  )
}

export default Homepage