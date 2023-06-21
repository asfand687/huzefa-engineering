import React from 'react'

const SectionTitle = ({title, color, classes}) => {
  return (
    <h2 
      className={`${color ? `text-${color}` : ""} text-[clamp(2.6rem,7vw,6rem)] font-extrabold py-10`}
    >
      {title}
    </h2>
  )
}

export default SectionTitle