import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-[100vh] -mt-[70px] flex items-center justify-center overflow-hidden">
      {/* Blurred Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm scale-110"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
        }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-black/50 to-blue-900/80"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
      
        
        <h1 className="mb-8 space-y-4">
          <span className="block text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-wider transform -rotate-1">
            Share Your
          </span>
          <span className="block text-6xl md:text-7xl lg:text-8xl font-black text-yellow-400 uppercase tracking-tight transform rotate-1 drop-shadow-lg">
            Startup Idea
          </span>
          <span className="block text-2xl md:text-3xl lg:text-4xl font-light text-white/80 italic">
            &
          </span>
          <span className="block text-5xl md:text-6xl lg:text-7xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Connect
            </span>
            <span className="text-white ml-4">with</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 ml-4">
              Real Investors
            </span>
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-100 mb-10 max-w-3xl mx-auto font-medium leading-relaxed italic">
          "Turn your vision into reality. Join thousands of entrepreneurs connecting with investors who believe in innovation."
        </p>
        
  
      </div>
    </section>
  );
};

export default HeroSection;