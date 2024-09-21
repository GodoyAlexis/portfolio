import React from 'react';

function Hero() {
  return (
    <section id="hero" className="bg-blue-600 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">¡Hola, soy Alexis Godoy!</h2>
        <p className="text-xl mb-6">Soy un desarrollador front-end apasionado por crear experiencias web increíbles.</p>
        <a href="#projects" className="bg-white text-blue-600 px-4 py-2 rounded">Ver mis proyectos</a>
      </div>
    </section>
  );
}

export default Hero;
