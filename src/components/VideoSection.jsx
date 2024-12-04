import React from 'react';

const VideoSection = () => {
  return (
    <section id="videos" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Nuestros Videos
        </h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://player.vimeo.com/video/824804225"
            className="w-full h-[600px]"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </div>
        <div className="text-center mt-8">
          <a
            href="https://vimeo.com/queridocuervo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            Ver más
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;