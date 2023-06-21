import React from 'react'

const LoremSection = () => {
  return (
    <section>
      <article className="px-4 w-full flex flex-col md:flex-row md:justify-center lg:max-w-6xl max-[1300px]:max-w-[1380px] ml-auto h-[700px] bg-lorem">
        <div className="w-full max-w-5xl flex md:h-[500px] items-end">
          <div className="w-full flex justify-center md:justify-between">
            <article className="flex flex-col gap-y-5 pt-10">
              <div className="w-[84px] h-[84px] font-extrabold text-3xl rounded-full flex justify-center items-center border-black border-2">
                01
              </div>
              <h2 className="text-5xl max-w-[220px] md:text-7xl font-extrabold md:max-w-[600px]">
                Lorem ipsum dolor
              </h2>
            </article>
            <article className="relative">
              <div className="absolute -bottom-[24rem] md:-bottom-[5rem] right-0">
                <div className="w-[110px] md:w-[140px] h-[110px] md:h-[140px] font-extrabold text-3xl rounded-full flex justify-center items-center border-black border-4">
                  <span className="text-3xl md:text-6xl">01</span>
                  <small>/04</small>
                </div>
              </div>
            </article>
          </div>
        </div>
      </article>
    </section>
  )
}

export default LoremSection