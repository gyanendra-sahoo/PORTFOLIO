import React from 'react'

const About = () => {
  return (
    <div id='about' className='h-screen flex justify-center items-center bg-black'>
      <div className='flex flex-col justify-center items-center gap-10 sm:px-6 sm:px-12 md:px-24'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold heading text-center'>
          About My Journey
        </h1>
        <div className="content max-w-4xl">
          <p className='text-[#A1A1A1] text-sm sm:text-base mt-5'>
            Hello! I’m a passionate MERN stack developer dedicated to building dynamic and responsive web applications. My journey in web development started with an eagerness to solve real-world problems using technology, and that passion has only grown stronger with time.
          </p>
          <p className='text-[#A1A1A1] text-sm sm:text-base mt-5'>
            Over the years, I’ve honed my skills in MongoDB, Express.js, React, and Node.js, allowing me to craft seamless and powerful web applications. I enjoy the process of transforming ideas into fully functional products, ensuring they are not only technically efficient but also provide a great user experience.
          </p>
          <p className='text-[#A1A1A1] text-sm sm:text-base mt-5'>
            I thrive on the challenge of developing end-to-end solutions, from building robust backends to creating intuitive front-end interfaces. My goal is always to build scalable, maintainable, and high-performance applications that deliver value to users and businesses alike.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
