import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HomeHero from './components/HomeHero'
import OurClientsSection from './sections/OurClientsSection'
import OurHistory from './sections/OurHistory'
import SpecialitySection from './sections/SpecialitySection'
import ContactUs from './sections/ContactUs'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className='overflow-clip'>
      <Navbar/>
      <HomeHero/>
      <OurClientsSection/>
      <OurHistory/>
      <SpecialitySection/>
      <ContactUs/>
      <Footer/>
    </section>
  )
}

export default App
