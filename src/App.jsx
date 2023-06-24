import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {
  Homepage,
  About
} from "./pages"

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className='overflow-clip'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="about/" element={<About />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </section>
  )
}

export default App
