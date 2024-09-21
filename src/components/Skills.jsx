import React from 'react';
import { SiTypescript, SiJavascript, SiReact, SiCss3, SiHtml5, SiBootstrap, SiTailwindcss, SiRedux, SiGit, SiNodedotjs, SiMongodb, SiExpress } from 'react-icons/si';

const skills = [
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'ReactJS', icon: <SiReact /> },
  { name: 'CSS y SASS', icon: <SiCss3 /> },
  { name: 'HTML', icon: <SiHtml5 /> },
  { name: 'Responsive', icon: '' },  // Puedes agregar un ícono si lo encuentras
  { name: 'Bootstrap', icon: <SiBootstrap /> },
  { name: 'Tailwind', icon: <SiTailwindcss /> },
  { name: 'Context', icon: '' },  // Puedes agregar un ícono si lo encuentras
  { name: 'Redux', icon: <SiRedux /> },
  { name: 'Git', icon: <SiGit /> },
  { name: 'NodeJs', icon: <SiNodedotjs /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'Express', icon: <SiExpress /> },
];

function Skills() {
  return (
    <section id="skills" className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Habilidades</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full border border-blue-300 shadow-sm flex items-center space-x-2"
            >
              {skill.icon && <span className="text-2xl">{skill.icon}</span>} {/* Muestra el ícono si está disponible */}
              <span>{skill.name}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
