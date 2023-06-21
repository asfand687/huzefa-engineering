import React from 'react'
import CEO from '../assets/ceo.png'

const CEOMessage = () => {
  return (
    <section className="flex flex-col md:flex-row gap-6 pt-10">
      <article>
        <div className="flex flex-col gap-y-1 pb-3">
          <h2 className="text-[clamp(8rem,8vw,150px)] font-extrabold leading-[120px]">CEO</h2>
          <h3 className="text-5xl font-extrabold">Message</h3>
        </div>
        <p className="w-full max-w-[500px] lg:text-2xl max-[1300px]:text-3xl font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </article>
      <article>
        <img className="w-full md:w-[630px] md:h-[820px] object-cover" src={CEO} alt="CEO"/>
      </article>
    </section>
  )
}

export default CEOMessage