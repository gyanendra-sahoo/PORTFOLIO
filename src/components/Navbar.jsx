import React from 'react'

const Navbar = () => {
  return (
    <nav className='h-[10vh] bg-black/80 backdrop-blur-md w-full flex justify-between items-center px-[10%] fixed z-2'>
      <div className="logo font-bold text-white text-2xl">Gyanendra..</div>
      <div className="nav-items flex w-1/2 justify-between font-semibold text-[#CFCFCF]">
        <h4 className='cursor-pointer hover:bg-[#333] hover:text-white hover:shadow-lg transition duration-300 rounded-md h-8 w-20 flex items-center justify-center font-normal'>Explore</h4>
        <h4 className='cursor-pointer hover:bg-[#333] hover:text-white hover:shadow-lg transition duration-300 rounded-md h-8 w-20 flex items-center justify-center font-normal'>About</h4>
        <h4 className='cursor-pointer hover:bg-[#333] hover:text-white hover:shadow-lg transition duration-300 rounded-md h-8 w-20 flex items-center justify-center font-normal'>Skills</h4>
        <h4 className='cursor-pointer hover:bg-[#333] hover:text-white hover:shadow-lg transition duration-300 rounded-md h-8 w-20 flex items-center justify-center font-normal'>Projects</h4>
        <h4 className='cursor-pointer hover:bg-[#333] hover:text-white hover:shadow-lg transition duration-300 rounded-md h-8 w-24 flex items-center justify-center font-normal'>Education</h4>
        <h4 className='cursor-pointer hover:bg-[#333] hover:text-white hover:shadow-lg transition duration-300 rounded-md h-8 w-20 flex items-center justify-center font-normal'>Contact</h4>
      </div>
    </nav>
  )
}

export default Navbar