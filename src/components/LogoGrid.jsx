import React from 'react'
import PandG from "../assets/pandg.png"
import Shan from '../assets/shan.png'
import Tapal from '../assets/tapal-energy.png'
import MTF from '../assets/mtf.png'
import AmreliSteels from '../assets/amreli-steels.png'
import Cadbury from '../assets/cadbury.png'
import Siraj from '../assets/siraj.png'
import Hino from '../assets/hino.png'
import National from '../assets/national.png'
import AES from '../assets/aes.png'
import PakistanCables from '../assets/pakistan-cables.png'
import Avery from '../assets/avery.png'
import FFC from '../assets/ffc.png'
import Exide from '../assets/exide.png'
import Lakson from '../assets/lakson-group.png'
import NationalPower from "../assets/national-power.png"
import Dupont from "../assets/dupont.png"
import HSM from "../assets/hsm.png"

const LogoGrid = () => {
  return (
    <section className="grid grid-cols-6 gap-8">
      <img className="w-[150px] h-[150px] object-contain" src={PandG} alt="P and G"/>
      <img className="w-[150px] h-[150px] object-contain" src={Shan} alt="Shan"/>
      <img className="w-[150px] h-[150px] object-contain" src={Tapal} alt="Tapal"/>
      <img className="w-[150px] h-[150px] object-contain" src={MTF} alt="MTF"/>
      <img className="w-[150px] h-[150px] object-contain" src={AmreliSteels} alt="Amreli Steels"/>
      <img className="w-[150px] h-[150px] object-contain" src={Cadbury} alt="Cadbury"/>
      <img className="w-[150px] h-[150px] object-contain" src={Siraj} alt="Siraj"/>
      <img className="w-[150px] h-[150px] object-contain" src={Hino} alt="Hino"/>
      <img className="w-[150px] h-[150px] object-contain" src={National} alt="National"/>
      <img className="w-[150px] h-[150px] object-contain" src={AES} alt="AES"/>
      <img className="w-[150px] h-[150px] object-contain" src={PakistanCables} alt="PakistanCables"/>
      <img className="w-[150px] h-[150px] object-contain" src={Avery} alt="Avery"/>
      <img className="w-[150px] h-[150px] object-contain" src={FFC} alt="FFC"/>
      <img className="w-[150px] h-[150px] object-contain" src={Exide} alt="Exide"/>
      <img className="w-[150px] h-[150px] object-contain" src={Lakson} alt="Lakson"/>
      <img className="w-[150px] h-[150px] object-contain" src={NationalPower} alt="National Power"/>
      <img className="w-[150px] h-[150px] object-contain" src={Dupont} alt="Dupont"/>
      <img className="w-[150px] h-[150px] object-contain" src={HSM} alt="HSM"/>

    </section>
  )
}

export default LogoGrid