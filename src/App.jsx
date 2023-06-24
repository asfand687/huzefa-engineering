import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HomeHero from './components/HomeHero'
import OurClientsSection from './sections/OurClientsSection'
import OurHistory from './sections/OurHistory'
import SpecialitySection from './sections/SpecialitySection'
import ContactUs from './sections/ContactUs'
import Footer from './components/Footer'
import {
  Homepage
} from "./pages"

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className='overflow-clip'>
      <Navbar/>
      <Homepage/>
      <Footer/>
    </section>
  )
}

export default App
