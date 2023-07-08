import React from 'react'

const Grid = () => {
  return (
    <div className="absolute grid grid-cols-5 right-0 w-full -z-10 h-full md:w-[clamp(270px,90vw,1400px)] ml-auto">
      <article className="border-l border-t-0 border-b-0 border-r border-[#808080] border-[0.5px]"></article>
      <article className="border-r border-t-0 border-b-0 border-l-0 border-[#808080] border-[0.5px]"></article>
      <article className="border-r border-t-0 border-b-0 border-l-0 border-[#808080] border-[0.5px]"></article>
      <article className="border-r border-t-0 border-b-0 border-l-0 border-[#808080] border-[0.5px]"></article>
      <article className="border-0"></article>
    </div>
  )
}

export default Grid