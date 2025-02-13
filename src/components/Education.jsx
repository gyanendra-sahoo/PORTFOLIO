import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "GIET UNIVERSITY, Gunupur, Odisha",
    year: "2022 - 2026",
    details: "Studying advanced topics in programming, data structures, algorithms, and AI."
  },
  {
    degree: "Higher Secondary Education",
    institution: "Christ College, Cuttack, Odisha",
    year: "2020 - 2022",
    details: "Focused on Mathematics, Physics, and Computer Science as core subjects."
  },
  {
    degree: "Secondary Education",
    institution: "Kalakala Nodal High School, Salapada, Jajpur",
    year: "Passing Year - 2020",
    details: "Built a strong foundation in Science and Mathematics."
  }
];

const Education = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card) => {
      gsap.fromTo(
        card,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: card,
            scroller: 'body',
            start: 'top 80%',
            end: 'top 50%',
            scrub: 2,
          }
        }
      );
    });
  }, []);

  const handleMouseMove = (e, index) => {
    const card = cardRefs.current[index];
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left - width / 1;
    const y = e.clientY - top - height / 1;
    
    gsap.to(card, {
      rotationY: (x / width) * 25,
      rotationX: -(y / height) * 25,
      transformPerspective: 1000,
      ease: "power2.out",
      duration: 0.3
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(cardRefs.current[index], {
      rotationY: 0,
      rotationX: 0,
      ease: "power2.out",
      duration: 0.5
    });
  };

  return (
    <div id='education' className='sm:p-10 min-h-screen flex flex-col justify-center items-center'>
      <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-20 heading'>
        My Education Journey
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
        {education.map((edu, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="border border-gray-300 rounded-lg p-5 shadow-lg relative transition-transform transform hover:scale-105"
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={() => handleMouseLeave(index)}
            style={{
              transformStyle: 'preserve-3d',
              perspective: '1000px'
            }}
          >
            <h3 className='text-xl sm:text-2xl text-white font-semibold mt-4'>{edu.degree}</h3>
            <p className='text-[#A1A1A1] text-sm sm:text-base mt-2'>{edu.institution}</p>
            <p className='text-md text-white opacity-60'>{edu.year}</p>
            <p className='text-sm mt-4 text-white opacity-90'>{edu.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;