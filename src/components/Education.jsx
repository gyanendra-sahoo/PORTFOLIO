import React from 'react';

const education = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'GIET UNIVERSITY, Gunupur, Odisha',
    year: '2022 - 2026',
    details: 'Studying advanced topics in programming, data structures, algorithms, and AI.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    degree: 'Higher Secondary Education',
    institution: 'Christ College, Cuttack, Odisha',
    year: '2020 - 2022',
    details: 'Focused on Mathematics, Physics, and Computer Science as core subjects.',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    degree: 'Secondary Education',
    institution: 'Kalakala Nodal High School, Salapada, Jajpur',
    year: 'Passing Year - 2020',
    details: 'Built a strong foundation in Science and Mathematics.',
    color: 'from-green-500 to-teal-500'
  }
];

const Education = () => {
  return (
    <div id='education' className="h-screen flex flex-col items-center justify-center text-white px-6 gap-20">
      <h2 className="text-5xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
        Education
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-13">
        {education.map((edu, index) => (
          <div
            key={index}
            className={`bg-gradient-to-r ${edu.color} p-6 rounded-lg shadow-xl w-80 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
          >
            <h3 className="text-2xl font-semibold">{edu.degree}</h3>
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
