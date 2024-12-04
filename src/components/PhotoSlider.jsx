import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const photos = [
  'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4',
  'https://images.unsplash.com/photo-1542204165-65bf26472b9b',
  'https://images.unsplash.com/photo-1516035069371-29a1b244cc32',
  'https://images.unsplash.com/photo-1533130061792-64b345e4a833',
  'https://images.unsplash.com/photo-1554080353-321e452ccf19',
  'https://images.unsplash.com/photo-1576824228421-c32f0531ebe3'
];

const PhotoSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false
        }
      }
    ]
  };

  return (
    <section id="fotos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Nuestro Portafolio
        </h2>
        <div className="mb-8">
          <Slider {...settings}>
            {photos.map((photo, index) => (
              <div key={index} className="px-2">
                <img
                  src={`${photo}?auto=format&fit=crop&w=800&h=600`}
                  alt={`Portfolio ${index + 1}`}
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="text-center mt-8">
          <Link
            to="/gallery"
            className="inline-block px-8 py-3 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            Ver más
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PhotoSlider;