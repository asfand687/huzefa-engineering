import React from 'react'

const ServicesDescription = ({children}) => {
  return (
    <section className="pt-20 flex flex-col gap-y-10">
      <section className="w-[clamp(270px,80vw,1300px)] mx-auto flex flex-col gap-y-8">
        {children}
      </section>
    </section>
  )
}

export default ServicesDescription