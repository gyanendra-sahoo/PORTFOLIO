import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect, useRef } from 'react';

const Project = () => {

  gsap.registerPlugin(ScrollTrigger);

  const projects = [
    {
      name: "E-Commerce Website",
      description: "A fully functional e-commerce platform where users can browse, add products to their cart, and make secure purchases.",
      technology: "React, Node.js, Express, MongoDB, Stripe API",
      imageLink: '/Open-Fashion.png'
    },
    {
      name: "Social Media App",
      description: "A social media application where users can create profiles, post updates, follow others, and interact through comments and likes.",
      technology: "React, Node.js, Express, MongoDB, Socket.io",
      imageLink: 'https://cdn.pixabay.com/photo/2016/06/09/20/38/woman-1446557_640.jpg'
    },
    {
      name: "Task Management App",
      description: "A task management tool that allows users to create, assign, and track tasks with due dates and progress tracking.",
      technology: "React, Node.js, Express, MongoDB",
      imageLink: 'https://cdn.pixabay.com/photo/2020/01/01/13/18/task-4733559_640.png'
    },
  ];

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
      rotationY: (x / width) * 20,
      rotationX: -(y / height) * 20,
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
    <div id='projects' className='sm:p-10 min-h-screen flex flex-col justify-center items-center'>
      <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-20 heading'>
        My Creativity On Web Development
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
        {projects.map((project, index) => (
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
            <img
              src={project.imageLink}
              alt={project.name}
              className="w-full h-48 sm:h-54 lg:h-64 object-cover rounded-2xl p-1"
              style={{ transform: 'translateZ(50px)' }}
            />
            <h3 className='text-xl sm:text-2xl text-gray-400 font-semibold mt-4'>{project.name}</h3>
            <p className='text-[#A1A1A1] text-sm sm:text-base mt-2'>{project.description}</p>
            <div className='flex flex-wrap gap-2 mt-2'>
              {project.technology.split(',').map((tech, i) => (
                <span key={i} className='text-gray-300 font-medium cursor-pointer bg-[#202024] text-sm sm:text-base px-2 py-1 rounded'>
                  {tech.trim()}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
