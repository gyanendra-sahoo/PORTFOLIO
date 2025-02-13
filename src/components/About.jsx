import React from 'react';

const About = () => {
  return (
    <div id='about' className='h-screen flex justify-center items-center bg-black'>
      <div className='flex flex-col justify-center items-center gap-6 sm:px-6 sm:px-12 md:px-24'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold heading text-center'>
          About My Journey
        </h1>
        <div className="content max-w-4xl">
          <p className='text-[#A1A1A1] text-sm sm:text-base mt-5'>
            Hi, I'm Gyanendra Sahoo, a passionate MERN stack developer focused on building dynamic and responsive web applications. 
          </p>
          <p className='text-[#A1A1A1] text-sm sm:text-base mt-5'>
            I specialize in MongoDB, Express.js, React, and Node.js, creating seamless and powerful applications that provide great user experiences.
          </p>
          <p className='text-[#A1A1A1] text-sm sm:text-base mt-5'>
            My goal is to develop scalable, maintainable, and high-performance solutions that solve real-world problems.
          </p>
        </div>
        <button className='text-white mt-6 bg-gray-700 px-4 py-2 rounded'>Explore More</button>
      </div>
    </div>
  );
}

export default About;
