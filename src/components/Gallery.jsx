import React from 'react';
import { motion } from 'framer-motion';

const photos = [
  'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4',
  'https://images.unsplash.com/photo-1542204165-65bf26472b9b',
  'https://images.unsplash.com/photo-1516035069371-29a1b244cc32',
  'https://images.unsplash.com/photo-1533130061792-64b345e4a833',
  'https://images.unsplash.com/photo-1554080353-321e452ccf19',
  'https://images.unsplash.com/photo-1576824228421-c32f0531ebe3',
  'https://images.unsplash.com/photo-1452587925148-ce544e77e70d',
  'https://images.unsplash.com/photo-1493863641943-9b68992a8d07',
  'https://images.unsplash.com/photo-1553521041-d168e2733cd4'
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Nuestra Galería
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="aspect-w-16 aspect-h-9 overflow-hidden"
            >
              <img
                src={`${photo}?auto=format&fit=crop&w=800&h=600`}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;