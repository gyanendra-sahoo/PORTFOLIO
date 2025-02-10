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
    <>
      <div id='hero' className="h-screen flex justify-center items-center">
        <div className='flex flex-col items-center justify-center mt-40' id='hero-content'>
        <h1 className="text-8xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Welcome to My Universe</h1>
        <h2 className='text-[#A1A1A1] text-2xl mt-10'>Explore a digital cosmos of creative development and</h2>
        <h2 className='text-[#A1A1A1] text-2xl'>innovative solutions</h2>
        <button className='bg-gradient-to-r from-blue-500 to-purple-500 text-lg px-4 py-2 rounded-lg font-semibold mt-8 cursor-pointer'>Begin Journey</button>
        </div>
      </div>
    </>
  )
}

export default Hero
