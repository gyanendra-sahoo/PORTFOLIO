import React from 'react';

const Navbar = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="h-[10vh] bg-black/80 backdrop-blur-md w-full flex justify-between items-center px-[10%] fixed z-[999]">
      <div className="logo font-bold text-white text-2xl relative group flex justify-center items-center cursor-pointer">
        <h1 className="absolute z-2 scale-0 group-hover:scale-150 transition-transform duration-600 ease-in-out text-gray-300">
          Gyanendra
        </h1>
        <img src="/GS.png" alt="Logo"
          className="w-18 rounded-full scale-100 group-hover:scale-0 transition-transform duration-500 ease-in-out"
        />
      </div>
      <div className="nav-items hidden md:flex w-1/2 justify-between font-semibold text-[#CFCFCF] p-2 rounded-3xl"
        style={{ boxShadow: '0 4px 6px rgba(241, 236, 236, 0.30)' }}>
        {["hero", "about", "projects", "skills", "education", "contact"].map((section, index) => (
          <h4 key={index}
            className="cursor-pointer hover:bg-[#202024] hover:text-white hover:shadow-lg transition duration-300 rounded-md h-8 flex items-center justify-center px-4 font-normal"
            onClick={() => scrollToSection(section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </h4>
        ))}
      </div>
      
    </nav>
  );
};

export default Navbar;
