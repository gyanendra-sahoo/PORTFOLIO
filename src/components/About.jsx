import React from 'react'

const About = () => {
  return (
    <div id='about' className='h-screen flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center gap-10'>
        <h1 className='text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text'>About My Journey</h1>
        <div className="content px-40">
          <p className='text-[#A1A1A1] text-base mt-5'>
            Hello! I’m a passionate MERN stack developer dedicated to building dynamic and responsive web applications. My journey in web development started with an eagerness to solve real-world problems using technology, and that passion has only grown stronger with time.
          </p>
          <p className='text-[#A1A1A1] text-base mt-5'>
            Over the years, I’ve honed my skills in MongoDB, Express.js, React, and Node.js, allowing me to craft seamless and powerful web applications. I enjoy the process of transforming ideas into fully functional products, ensuring they are not only technically efficient but also provide a great user experience.
          </p>
          <p className='text-[#A1A1A1] text-base mt-5'>
            I thrive on the challenge of developing end-to-end solutions, from building robust backends to creating intuitive front-end interfaces. My goal is always to build scalable, maintainable, and high-performance applications that deliver value to users and businesses alike.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
