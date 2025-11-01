import React from 'react';

const OurVision = () => {
  return (
    <section className="py-10 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title - Centered and Larger */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-300 rounded-full mb-6 shadow-sm">
            <span className="text-3xl">🔮</span>
            <span className="text-purple-700 font-bold text-base uppercase tracking-wide">
              Our Vision
            </span>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
            Shaping the
            <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600">
              Future of Startup Funding
            </span>
          </h2>

          <p className="text-2xl text-gray-600 max-w-3xl mx-auto mt-8">
            Enabling every brilliant idea to shine — no matter where it comes from.
          </p>
        </div>
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Image */}
          <div className="relative order-1 lg:order-none">
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-purple-300 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-300 rounded-full blur-3xl opacity-40"></div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                alt="Vision and future"
                className="w-full h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/25 to-blue-600/25"></div>
            </div>
          </div>
          
          {/* Right Side - Text Content */}
          <div className="space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              A World Where Every Great Idea Gets Its Chance
            </h3>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              We envision a future where geography, privilege, and access no longer determine who succeeds. 
              Our mission is to empower dreamers, creators, and innovators from all backgrounds to turn their vision into reality.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              By building a transparent and inclusive ecosystem, we’re shaping a new era of startup funding — 
              one that celebrates innovation, collaboration, and impact on a global scale.
            </p>
            
            {/* Vision Points */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl">🌍</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">Global Accessibility</h4>
                  <p className="text-gray-600">Breaking down barriers to make startup funding accessible everywhere</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl">🤝</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">Trust & Transparency</h4>
                  <p className="text-gray-600">Building genuine connections based on integrity and shared goals</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl">⚡</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">Innovation First</h4>
                  <p className="text-gray-600">Empowering disruptive ideas that will define the future economy</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default OurVision;
