import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState } from "react";
import { FaDownload } from "react-icons/fa";

const Hero = () => {
  useGSAP(() => {
    gsap.from("#hero-content", {
      y: 150,
      opacity: 0,
      duration: 0.8,
    });
  });

  const handleDownload = () => {
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/Gyanendra-Sahoo-Resume.pdf";
      link.download = "resume.pdf";
      link.click();
    }, 2000);
  };

  return (
    <div
      id="hero"
      className="lg:h-screen flex justify-center items-center bg-black"
    >
      <div
        className="flex flex-col items-center justify-center mt-40"
        id="hero-content"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold heading text-center">
          Welcome to My Universe
        </h1>
        <h2 className="text-[#A1A1A1] text-lg sm:text-xl md:text-2xl mt-10 text-center">
          Explore a digital cosmos of creative development and
        </h2>
        <h2 className="text-[#A1A1A1] text-lg sm:text-xl md:text-2xl text-center">
          innovative solutions
        </h2>

        <button
          className="bg-gradient-to-r from-gray-500 to-gray-600 text-base sm:text-lg px-4 py-2 rounded-lg font-semibold mt-8 cursor-pointer flex items-center gap-2 text-gray-300"
          onClick={handleDownload}
        >
          <FaDownload /> Download Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;
