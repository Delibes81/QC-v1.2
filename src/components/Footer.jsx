import React from 'react';
import { Facebook, Instagram, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex space-x-8">
            <a href="#" className="text-gray-900 hover:text-gray-600 transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-600 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-600 transition-colors">
              <Phone className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Querido Cuervo. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;