import React from 'react'
import Buildings from "../assets/buildings-grid.png"
import PlusButton from '../components/PlusButton'

const SpecialitySection = () => {
  return (
    <section className="bg-black text-white pt-32 pb-[700px]">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-x-8">
          <article className="w-full max-w-[500px]">
            <h2 className="text-5xl font-bold pb-3">We Specialize In</h2>
            <p className="w-full text-2xl font-bold max-w-[500px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <ul className='text-xl font-bold list-disc pl-6 py-6'>
              <li>Elevators</li>
              <li>Conveyers</li>
              <li>H.T Transformers Casing</li>
              <li>Oil/ Water storage tanks and vessels</li>
              <li>Roof cladding</li>
              <li>Pressure Vessels</li>
              <li>Weigh Bridges</li>
              <li>Bill Boards</li>
            </ul>
            <PlusButton/>
          </article>
          <article>
            <img className="w-full max-w-[500px]  object-cover" src={Buildings} alt="Buildings"/>
          </article>
        </div>
      </div>
    </section>
  )
}

export default SpecialitySection