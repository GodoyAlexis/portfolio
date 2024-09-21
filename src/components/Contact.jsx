import React, { useState } from 'react';

function Contact() {
  // Definir el estado de los campos del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Función para manejar el cambio en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Actualizar el valor correspondiente en el estado
    });
  };

  // Función para manejar el envío del formulario (por ahora solo previene el reload)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Crear el cuerpo del email con los datos del formulario
    const mailtoLink = `mailto:tucorreo@example.com?subject=Mensaje de ${formData.name}&body=Nombre: ${formData.name}%0AEmail: ${formData.email}%0AMensaje: ${formData.message}`;
    
    // Abrir el cliente de correo con los datos del formulario
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="bg-blue-600 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Contacto</h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 text-black">
          <input
            type="text"
            name="name"
            value={formData.name} // Asociar valor del estado
            onChange={handleInputChange} // Actualizar estado al escribir
            placeholder="Tu nombre"
            className="p-2 w-full max-w-sm rounded"
          />
          <input
            type="email"
            name="email"
            value={formData.email} // Asociar valor del estado
            onChange={handleInputChange} // Actualizar estado al escribir
            placeholder="Tu correo"
            className="p-2 w-full max-w-sm rounded"
          />
          <textarea
            name="message"
            value={formData.message} // Asociar valor del estado
            onChange={handleInputChange} // Actualizar estado al escribir
            placeholder="Tu mensaje"
            className="p-2 w-full max-w-sm rounded h-32"
          />
          <button type="submit" className="bg-white text-blue-600 px-4 py-2 rounded">Enviar</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
