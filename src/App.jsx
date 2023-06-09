import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {
  Homepage,
  About,
  GeneralOrderSupplies,
  Services,
  BulkMovementSolutions,
  MetalFabricationServices
} from "./pages"

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
    <section className='overflow-clip'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services />} />
          <Route path="/services/general-order-supplies" element={<GeneralOrderSupplies />} />
          <Route path="/services/bulk-movement-solutions" element={<BulkMovementSolutions/>}/>
          <Route path="/services/metal-fabrication-services" element={<MetalFabricationServices/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </section>
  )
}

export default App
