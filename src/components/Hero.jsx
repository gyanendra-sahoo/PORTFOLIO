import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Hero = () => {

  useGSAP(() => {
    gsap.from('#hero-content', {
      y: 150,
      opacity: 0,
      duration: 0.8
    })
  })

  return (
    <div id='hero' className="lg:h-screen flex justify-center items-center bg-black">
      <div className='flex flex-col items-center justify-center mt-40 sm:px-6 sm:px-12 md:px-24' id='hero-content'>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-center">
          Welcome to My Universe
        </h1>
        <h2 className='text-[#A1A1A1] text-lg sm:text-xl md:text-2xl mt-10 text-center'>
          Explore a digital cosmos of creative development and
        </h2>
        <h2 className='text-[#A1A1A1] text-lg sm:text-xl md:text-2xl text-center'>
          innovative solutions
        </h2>
        <button className='bg-gradient-to-r from-blue-500 to-purple-500 text-base sm:text-lg px-4 py-2 rounded-lg font-semibold mt-8 cursor-pointer'>
          Begin Journey
        </button>
      </div>
    </div>
  )
}

export default Hero
