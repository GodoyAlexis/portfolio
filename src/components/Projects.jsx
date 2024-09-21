import React from 'react';

const projects = [
  { title: 'Proyecto 1', description: 'Descripción del proyecto 1', link: '#' },
  { title: 'Proyecto 2', description: 'Descripción del proyecto 2', link: '#' },
  { title: 'Proyecto 3', description: 'Descripción del proyecto 3', link: '#' },
];

function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Mis Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <a href={project.link} className="text-blue-600 hover:underline">Ver proyecto</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
