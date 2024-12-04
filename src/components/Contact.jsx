import React from 'react';

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Contáctanos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-900 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-gray-50 text-gray-900 border border-gray-200 rounded focus:outline-none focus:border-gray-900"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-gray-50 text-gray-900 border border-gray-200 rounded focus:outline-none focus:border-gray-900"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-900 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-50 text-gray-900 border border-gray-200 rounded focus:outline-none focus:border-gray-900"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gray-900 text-white font-semibold rounded hover:bg-gray-800 transition-colors duration-300"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
          <div className="relative">
            <div className="aspect-w-1 aspect-h-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.761737554157!2d-99.16869492526733!3d19.42702714559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sZona%20Rosa%2C%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1709902144899!5m2!1ses-419!2smx"
                className="absolute inset-0 w-full h-full rounded-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;