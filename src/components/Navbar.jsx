import React from 'react'

const Navbar = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className='h-[10vh] bg-black/80 backdrop-blur-md w-full flex justify-between items-center px-[10%] fixed z-2'>
      <div className="logo font-bold text-white text-2xl">Gyanendra..</div>
      <div className="nav-items flex w-1/2 justify-between font-semibold text-[#CFCFCF]">
        <h4 className='cursor-pointer hover:bg-[#202024] hover:text-white hover:shadow-lg transition duration-300 rounded-md h-8 w-20 flex items-center justify-center font-normal'
        onClick={() => scrollToSection('hero')}
        >Explore</h4>
        <h4 className='cursor-pointer hover:bg-[#202024] hover:text-white hover:shadow-lg transition duration-300 rounded-md h-8 w-20 flex items-center justify-center font-normal'
        onClick={() => scrollToSection('about')}
        >About</h4>
        <h4 className='cursor-pointer hover:bg-[#202024] hover:text-white hover:shadow-lg transition duration-300 rounded-md h-8 w-20 flex items-center justify-center font-normal'
        onClick={() => scrollToSection('projects')}
        >Projects</h4>
        <h4 className='cursor-pointer hover:bg-[#202024] hover:text-white hover:shadow-lg transition duration-300 rounded-md h-8 w-20 flex items-center justify-center font-normal'
        onClick={() => scrollToSection('skills')}
        >Skills</h4>
        <h4 className='cursor-pointer hover:bg-[#202024] hover:text-white hover:shadow-lg transition duration-300 rounded-md h-8 w-24 flex items-center justify-center font-normal'
        onClick={() => scrollToSection('education')}
        >Education</h4>
        <h4 className='cursor-pointer hover:bg-[#202024] hover:text-white hover:shadow-lg transition duration-300 rounded-md h-8 w-20 flex items-center justify-center font-normal'
        onClick={() => scrollToSection('contact')}
        >Contact</h4>
      </div>
    </nav>
  )
}

export default Navbar