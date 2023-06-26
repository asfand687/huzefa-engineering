import React from 'react'
import { AboutCarousel } from "../../sections"
import AboutDescriptionBlock from '../../components/AboutDescriptionBlock'

const AboutDescription = () => {
  return (
    <section className="pt-20 flex flex-col gap-y-10">
      <section className="w-[clamp(270px,80vw,1300px)] mx-auto flex flex-col gap-y-8">
        <AboutDescriptionBlock
          title="About Fabrication"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        <AboutDescriptionBlock
          title="01 Fabrication"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          headingColor="text-[#0065E7]"
        />
      </section>
      <AboutCarousel/>
      <section className="w-[clamp(270px,80vw,1300px)] mx-auto flex flex-col gap-y-8">
        <AboutDescriptionBlock
          title="02 Fabrication"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          headingColor="text-[#0065E7]"
        />
      </section>
      <AboutCarousel/>
    </section>
  )
}

export default AboutDescription