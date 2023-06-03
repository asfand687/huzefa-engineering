import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HomeHero from './components/HomeHero'
import LoremSection from './sections/LoremSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section>
      <Navbar/>
      <HomeHero/>
      <LoremSection/>
    </section>
  )
}

export default App
