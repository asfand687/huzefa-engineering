import React from 'react'
import PlusButton from './PlusButton'

const ServiceBlock = ({id, title, description}) => {
  return (
    <article className="text-white">
      <h3 className="text-2xl font-extrabold">
        {id}
      </h3>
      <h2 className="text-5xl font-semibold py-5">
        {title}
      </h2>
      <p className="text-black text-lg font-semibold w-full max-w-[500px] pb-4">
        {description}
      </p>
      <PlusButton/>
    </article>
  )
}

export default ServiceBlock