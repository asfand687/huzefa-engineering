import React from 'react'
import CEO from '../../assets/ceo.png'

const CEOMessage = () => {
  return (
    <section className="flex flex-col md:flex-row gap-10 py-10">
      <article>
        <div className="flex flex-col gap-y-1 pb-3">
          <h2 className="text-[clamp(3.5rem,6vw,100px)] leading-10 font-extrabold md:leading-[120px]">Directors'</h2>
          <h3 className="text-5xl font-extrabold">Message</h3>
        </div>
        <div className="flex w-full max-w-[500px] flex-col gap-y-4 text-base md:text-xl font-bold text-justify">
          <p>
            With a team of highly skilled professionals, we embrace innovation and strive to exceed your expectations in every project we undertake. Guided by the visionary legacy of our late founder, Baqir Faizullah, we uphold the highest standards of technical expertise, meticulous project management, and exceptional business acumen. Baqir Faizullah's unmatched technical skills and leadership continue to inspire us as we navigate new horizons in the engineering industry.
          </p>
          <p>
            Thank you for your continued trust in Huzefa Engineering Services. We value our partnership with you and remain dedicated to providing exceptional engineering solutions that drive your success. Together, we will honor Baqir Faizullah's legacy and forge a path of continued excellence.
          </p>
        </div>
      </article>
      <article>
        <img className="w-full md:max-w-[630px] object-cover" src={CEO} alt="CEO"/>
      </article>
    </section>
  )
}

export default CEOMessage