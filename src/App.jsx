import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {
  Homepage,
  About,
  GeneralOrderSupplies,
  Services,
  BulkMovementSolutions
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
          <Route path="/services" element={<Services />} />
          <Route path="/services/general-order-supplies" element={<GeneralOrderSupplies />} />
          <Route path="/services/bulk-movement-solutions" element={<BulkMovementSolutions/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </section>
  )
}

export default App
