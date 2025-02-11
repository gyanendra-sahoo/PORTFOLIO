import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Project from '../components/Project';
import Skill from '../components/Skill';
import Education from '../components/Education';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className='w-full px-6 sm:px-[10%] bg-black'>
      <Hero />
      <About />
      <Project />
      <Skill />
      <Education />
      <Contact />
    </div>
  );
};

export default Home;
