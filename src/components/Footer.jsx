import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#111] text-gray-400 py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-white text-2xl font-bold">Gyanendra</h2>
          <p className="mt-2 text-sm text-gray-500">Building innovative web solutions for a better future.</p>
        </div>
        <div className="flex flex-col items-center md:items-start">
        
          <ul className="mt-3 space-y-2">
          <li className="hover:text-blue-500"
            onClick={() => scrollToSection('hero')}
            >Home</li>
            <li className="hover:text-blue-500"
            onClick={() => scrollToSection('about')}
            >About</li>
            <li className="hover:text-blue-500"
            onClick={() => scrollToSection('projects')}
            >Projects</li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start">
          
          <ul className="mt-3 space-y-2">
          <li className="hover:text-blue-500"
            onClick={() => scrollToSection('skills')}
            >Skills</li>
            <li className="hover:text-blue-500"
            onClick={() => scrollToSection('education')}
            >Education</li>
            <li className="hover:text-blue-500"
            onClick={() => scrollToSection('contact')}
            >Contacts</li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-white text-lg font-semibold">Follow Me</h3>
          <div className="flex gap-4 mt-3">
            <Link to="/facebook" className="text-gray-400 hover:text-white text-xl"><FaFacebook /></Link>
            <Link to="/twitter" className="text-gray-400 hover:text-white text-xl"><FaTwitter /></Link>
            <Link to="https://www.instagram.com/urfav_gyana/" className="text-gray-400 hover:text-white text-xl"><FaInstagram /></Link>
            <Link to="https://www.linkedin.com/in/gyanendrasahoo" className="text-gray-400 hover:text-white text-xl"><FaLinkedin /></Link>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-sm border-t border-gray-700 pt-5">
        <p>&copy; {new Date().getFullYear()} Gyanendra. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
