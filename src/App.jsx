import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HomeHero from './components/HomeHero'
import LoremSection from './sections/LoremSection'
import OurClientsSection from './sections/OurClientsSection'
import OurHistory from './sections/OurHistory'
import SpecialitySection from './sections/SpecialitySection'
import ContactUs from './sections/ContactUs'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section>
      <Navbar/>
      <HomeHero/>
      <LoremSection/>
      <OurClientsSection/>
      <OurHistory/>
      <SpecialitySection/>
      <ContactUs/>
      <Footer/>
    </section>
  )
}

export default App
