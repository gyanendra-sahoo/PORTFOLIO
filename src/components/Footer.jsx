import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#111] text-gray-400 py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-white text-2xl font-bold">Gyanendra</h2>
          <p className="mt-2 text-sm text-gray-500">Building innovative web solutions for a better future.</p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-white text-lg font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li><a href="/" className="hover:text-blue-500">Home</a></li>
            <li><a href="/about" className="hover:text-blue-500">About</a></li>
            <li><a href="/projects" className="hover:text-blue-500">Projects</a></li>
            <li><a href="/contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-white text-lg font-semibold">Follow Me</h3>
          <div className="flex gap-4 mt-3">
            <a href="#" className="text-gray-400 hover:text-blue-500 text-xl"><FaFacebook /></a>
            <a href="#" className="text-gray-400 hover:text-blue-500 text-xl"><FaTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-blue-500 text-xl"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-blue-500 text-xl"><FaLinkedin /></a>
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
