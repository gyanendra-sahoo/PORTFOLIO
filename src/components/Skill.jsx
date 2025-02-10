
import React from 'react'

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
]

const Skill = () => {

  return (
    <div id='skills' className="h-screen flex flex-col items-center justify-center text-white gap-40">
      <h2 className="text-5xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
        My Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`bg-gradient-to-r ${skill.color} px-6 py-4 rounded-lg shadow-xl text-lg font-semibold transform transition-all duration-300 hover:scale-110 hover:shadow-2xl`}
          >
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skill