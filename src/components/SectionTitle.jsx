import React from 'react'

const SectionTitle = ({title, color}) => {
  return (
    <h2 
      className={`${color ? `text-${color}` : ""} text-8xl font-extrabold py-10`}
    >
      {title}
    </h2>
  )
}

export default SectionTitle