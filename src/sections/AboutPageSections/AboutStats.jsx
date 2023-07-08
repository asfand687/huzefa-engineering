import React from 'react'

const AboutStats = () => {
  return (
    <section className="w-full md:w-[clamp(270px,90vw,1400px)] md:ml-auto md:py-20 flex justify-center">
      <article className="hidden md:block flex-1">
      </article>
      <article className="flex-[2] flex md:gap-x-12 lg:gap-x-16">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold">40</h2>
            <h4 className="text-primary text-sm font-bold">Years of Experience</h4>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold">25</h2>
            <h4 className="text-primary text-sm font-bold">Employees</h4>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold">63</h2>
            <h4 className="text-primary text-sm font-bold">Projects</h4>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">About Us</h2>
          <div className="w-[clamp(270px,30vw,600px)] flex flex-col gap-y-4 font-bold">
            <p>At <span className="text-primary">Huzefa Engineering Services</span>, customer satisfaction is key. Our skilled Service team works on jobs of all sizes with equal importance, either at our workshop or the customer's site.</p>
            <p>
              In today's business, customer satisfaction is of utmost importance. Keeping this fact in mind, we at Huzefa Engineering Services (HES) assist our customers in any way we can. Our Service team is capable of doing its work, whether at our workshop or at the customer's site, whichever optimizes and benefits the work we commence. We treat all jobs with equal importance, though they may be small or large and we do strive for perfection.
            </p>
          </div>
        </div>
      </article>
    </section>
  )
}

export default AboutStats