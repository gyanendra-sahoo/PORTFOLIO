import React from 'react';

const education = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'GIET UNIVERSITY, Gunupur, Odisha',
    year: '2022 - 2026',
    details: 'Studying advanced topics in programming, data structures, algorithms, and AI.',
    color: 'black'
  },
  {
    degree: 'Higher Secondary Education',
    institution: 'Christ College, Cuttack, Odisha',
    year: '2020 - 2022',
    details: 'Focused on Mathematics, Physics, and Computer Science as core subjects.',
    color: 'black'
  },
  {
    degree: 'Secondary Education',
    institution: 'Kalakala Nodal High School, Salapada, Jajpur',
    year: 'Passing Year - 2020',
    details: 'Built a strong foundation in Science and Mathematics.',
    color: 'black'
  }
];

const Education = () => {
  return (
    <div id='education' className="h-auto sm:h-screen flex flex-col items-center justify-center text-white sm:px-6 gap-16 sm:gap-20">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
        Education
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
        {education.map((edu, index) => (
          <div
            key={index}
            className={`bg-gradient-to-r ${edu.color} p-6 rounded-lg shadow-xl w-80 sm:w-[300px] lg:w-[320px] text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-4 border-gray-900`}
          >
            <h3 className="text-xl sm:text-2xl font-semibold">{edu.degree}</h3>
            <p className="text-lg opacity-80 mt-2">{edu.institution}</p>
            <p className="text-md opacity-60">{edu.year}</p>
            <p className="text-sm mt-4 opacity-90">{edu.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
