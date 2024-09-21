import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between p-4">
        <h1 className="text-2xl font-bold">Mi Portafolio</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#hero" className="hover:text-blue-600">Inicio</a></li>
            <li><a href="#projects" className="hover:text-blue-600">Proyectos</a></li>
            <li><a href="#skills" className="hover:text-blue-600">Habilidades</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
