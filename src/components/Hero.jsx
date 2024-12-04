import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="py-20 bg-white">
    <div className="relative h-screen">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
        src="https://player.vimeo.com/external/459389137.sd.mp4?s=42de75e819b3a1f0b8699dcef96e4161ea84668b&profile_id=164&oauth2_token_id=57447761"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Capturando momentos, creando historias
          </h1>
          <p className="text-xl text-gray-200">
            Transformamos visiones en realidad a través del lente
          </p>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Hero;