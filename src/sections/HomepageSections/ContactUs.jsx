import React from 'react'
import SectionTitle from '../../components/SectionTitle'

const ContactUs = () => {
  return (
    <section className="bg-[#0065E7] text-white py-10">
      <div className="relative z-50 w-[clamp(270px,80vw,1300px)] mx-auto">
        
        <SectionTitle
          title="Contact Us"
        />
        <form className="flex flex-col gap-y-5 text-lg">
          <div className="flex-1">
            <input 
              className="w-full border-b bg-transparent placeholder:text-white border-white pb-3 outline-none"
              placeholder="Name"
            />
          </div>
          <div className="flex-1">
            <input 
              className="w-full border-b bg-transparent placeholder:text-white border-white pb-3 outline-none"
              placeholder="Email"
              type="email"
            />
          </div>
          <div className="flex-1">
            <input 
              className="w-full border-b bg-transparent placeholder:text-white border-white pb-3 outline-none"
              placeholder="Phone Number"
              type="tel"
            />
          </div>
          <div className="flex-1">
            <textarea 
              className="w-full h-24 border-b bg-transparent placeholder:text-white border-white pb-3 outline-none"
              placeholder="Message"
            />
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <button className="flex items-center gap-x-3">
              <span className="font-bold text-xl">
                Send Enquiry
              </span>
              <svg width="47" height="38" viewBox="0 0 47 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M46.0925 18.8144C46.0925 19.4348 45.8195 20.0056 45.3231 20.4774L28.842 36.9583C28.3207 37.43 27.7995 37.6285 27.2286 37.6285C25.9875 37.6285 25.0443 36.7351 25.0443 35.494C25.0443 34.9232 25.2677 34.3274 25.665 33.9302L31.1999 28.2711L39.5894 20.651L33.5579 21.0482H2.1843C0.893642 21.0482 -7.62939e-06 20.105 -7.62939e-06 18.8144C-7.62939e-06 17.5237 0.893642 16.6051 2.1843 16.6051H33.5579L39.5646 16.9775L31.1999 9.3575L25.665 3.72316C25.2428 3.30119 25.0443 2.73031 25.0443 2.13462C25.0443 0.91838 25.9875 0 27.2286 0C27.7995 0 28.3455 0.223388 28.8916 0.744632L45.3231 17.1513C45.8195 17.6477 46.0925 18.2186 46.0925 18.8144Z" fill="#F6FBFF"/>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactUs