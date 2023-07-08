import React from 'react'

const AboutHeadingText = ({text, textColor = "text-[#1E1E1E]"}) => {
  return (
    <div className="flex justify-center max-w-xl mx-auto">
      <h2 className={`text-4xl md:text-7xl md:leading-tight font-bold ${textColor}`}>{text}</h2>
    </div>
  )
}

export default AboutHeadingText