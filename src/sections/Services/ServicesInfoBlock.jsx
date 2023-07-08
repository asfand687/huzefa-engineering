import React from 'react'

const ServicesInfoBlock = ({title, headingColor = "", description, subService, number}) => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-8">
      <article className="flex-1 flex md:justify-end font-bold text-3xl md:text-4xl">
        <div className={`${headingColor}`}>
          {subService && <h4>{number}</h4>}
          <h2 className={`max-w-[260px] md:max-w-xs `}>{title}</h2>
        </div>
      </article>
      <article className="w-full max-w-[440px] flex flex-col gap-y-5 text-xl font-bold">
        <p>
          {description}
        </p>
      </article>
    </div>
  )
}

export default ServicesInfoBlock