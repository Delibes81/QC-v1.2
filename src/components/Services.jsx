import React from 'react';
import { Camera, Film, Package, CameraIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Estudio Fotográfico',
    description: 'Sesiones profesionales en estudio con equipo de última generación',
    icon: Camera
  },
  {
    title: 'Cortos Cinematográficos',
    description: 'Producción audiovisual de alta calidad para todo tipo de proyectos',
    icon: Film
  },
  {
    title: 'Fotos de Producto',
    description: 'Fotografía comercial y publicitaria para productos y marcas',
    icon: Package
  },
  {
    title: 'Renta de Equipo',
    description: 'Alquiler de equipo profesional para fotografía y video',
    icon: CameraIcon
  }
];

const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-50 hover:bg-gray-100 transition-all duration-300 flex flex-col items-center"
            >
              <service.icon className="w-12 h-12 text-gray-900 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;