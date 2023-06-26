import React from 'react'

const AboutDescriptionBlock = ({title, description, headingColor}) => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-6">
      <article className="flex-1 flex md:justify-end">
        <h2 className={`max-w-[200px] text-3xl md:text-6xl font-bold md:max-w-[400px] ${headingColor}`}>{title}</h2>
      </article>
      <article className="w-full max-w-[440px] flex flex-col gap-y-5 text-xl font-bold">
        <p>
          {description}
        </p>
        <p>
          {description}
        </p>
      </article>
    </div>
  )
}

export default AboutDescriptionBlock