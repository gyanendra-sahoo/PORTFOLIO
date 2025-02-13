import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const skills = [
  { name: 'HTML', color: 'from-orange-500 to-red-500' },
  { name: 'CSS', color: 'from-blue-500 to-indigo-500' },
  { name: 'JavaScript', color: 'from-yellow-500 to-orange-500' },
  { name: 'React', color: 'from-blue-500 to-cyan-500' },
  { name: 'Node.js', color: 'from-green-500 to-lime-500' },
  { name: 'MongoDB', color: 'from-green-600 to-green-400' },
  { name: 'Tailwind CSS', color: 'from-blue-400 to-indigo-500' },
  { name: 'GSAP', color: 'from-green-400 to-teal-500' },
  { name: 'Redux', color: 'from-purple-500 to-violet-500' },
  { name: 'Express.js', color: 'from-gray-700 to-gray-500' },
  { name: 'Java', color: 'from-red-600 to-orange-600' },
  { name: 'Python', color: 'from-blue-600 to-teal-500' }
];

const Skill = () => {
  const skillRefs = useRef([]);

  useEffect(() => {
    skillRefs.current.forEach((el) => {
      if (el) {
        gsap.fromTo(el, 
          { filter: "blur(5px)", opacity: 0.5 }, 
          { filter: "blur(0px)", opacity: 1, duration: 1.5, ease: "power2.out" }
        );
      }
    });
  }, []);

  const handleMouseMove = (e, index) => {
    const card = skillRefs.current[index];
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;

    gsap.to(card, {
      rotationY: (x / width) * 15,
      rotationX: -(y / height) * 15,
      transformPerspective: 800,
      boxShadow: '0px 0px 20px rgba(255, 255, 255, 0.5)',
      ease: "power2.out",
      duration: 0.3
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(skillRefs.current[index], {
      rotationY: 0,
      rotationX: 0,
      boxShadow: '0px 4px 10px rgba(255, 255, 255, 0.1)',
      ease: "power2.out",
      duration: 0.3
    });
  };

  return (
    <div id='skills' className="h-screen flex flex-col items-center justify-center gap-20 sm:gap-32 md:gap-40">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-10 heading">
        My Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-white">
        {skills.map((skill, index) => (
          <div
            key={index}
            ref={(el) => (skillRefs.current[index] = el)}
            className={`bg-gradient-to-r ${skill.color} px-6 py-4 rounded-lg text-lg font-semibold transition-all duration-100 relative overflow-hidden`}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={() => handleMouseLeave(index)}
            style={{
              transformStyle: 'preserve-3d',
              perspective: '1000px',
              background: "rgba(255, 255, 255, 0.1)",
              boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              position: "relative"
            }}
          >
            {skill.name}
            <span className="absolute inset-0 rounded-lg opacity-40 blur-xl bg-gradient-to-r from-white to-transparent animate-pulse"></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
