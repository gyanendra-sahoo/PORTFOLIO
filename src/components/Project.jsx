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

  const boxRefs = useRef([]);

  useEffect(() => {
    boxRefs.current.forEach((box) => {
      gsap.fromTo(
        box, 
        { y: 100, opacity: 0 }, 
        {
          y: 0, 
          opacity: 1,
          scrollTrigger: {
            trigger: box,
            scroller: 'body',
            start: 'top 70%',
            end: 'top 40%',
            scrub: 2,
          }
        }
      );
    });
  }, []);

  return (
    <div id='projects' className='p-10 h-screen flex flex-col justify-center items-center'>
      <h2 className='text-5xl font-bold text-center mb-20 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text'>
        My Creativity On Web Development
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => boxRefs.current[index] = el} // Assign each box's ref
            className="border border-gray-300 rounded-lg p-5 shadow-lg"
          >
            <img
              src={project.imageLink}
              alt={project.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className='text-xl text-white font-semibold mt-4'>{project.name}</h3>
            <p className='text-[#A1A1A1] text-sm mt-2'>{project.description}</p>
            <div className='flex flex-wrap gap-2 mt-2'>
              {project.technology.split(',').map((tech, i) => (
                <span key={i} className='text-white font-medium cursor-pointer bg-[#202024] text-sm px-2 py-1 rounded'>
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
