import React from 'react';

const CompanyDetails = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Elegant Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white border-2 border-[#5471ff]/30 rounded-full mb-8 shadow-lg">
            <div className="w-3 h-3 bg-[#5471ff] rounded-full animate-pulse"></div>
            <span className="text-[#5471ff] font-bold text-sm uppercase tracking-wider">Company Profile</span>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-4 tracking-tight">
            Ideanect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#5471ff] to-[#8b3ffc] mx-auto mb-6"></div>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-light">
            Where Brilliant Ideas Meet Strategic Investment
          </p>
        </div>
        
        {/* Main Content - Premium Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Company Story - Spans 2 Columns */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5471ff] to-[#8b3ffc] rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Our Story</h3>
              </div>
              
              <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
                <p>
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5471ff] to-[#8b3ffc]">Ideanect</span> is Bangladesh's pioneering platform revolutionizing the startup investment landscape. We're not just a marketplace—we're a movement democratizing access to capital and opportunity across South Asia and beyond.
                </p>
                
                <p>
                  Founded in the vibrant tech hub of Dhaka, we understand the unique challenges faced by entrepreneurs in emerging markets. Our mission is to break down barriers, connect visionary founders with strategic investors, and fuel the next generation of innovation.
                </p>
                
                <p>
                  By combining cutting-edge AI matching technology with deep local expertise, we're creating a transparent ecosystem where talent meets capital, and ideas transform into thriving businesses.
                </p>
              </div>
              
              {/* Impact Metrics */}
              <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-4xl font-black text-[#5471ff] mb-1">2.5K+</div>
                  <div className="text-sm text-gray-600 font-medium">Active Startups</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-[#7060ff] mb-1">1.8K+</div>
                  <div className="text-sm text-gray-600 font-medium">Verified Investors</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-[#8b3ffc] mb-1">৳350M+</div>
                  <div className="text-sm text-gray-600 font-medium">Capital Raised</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Info Card */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-[#5471ff] to-[#8b3ffc] rounded-3xl p-8 shadow-2xl text-white h-full">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Quick Facts
              </h3>
              
              <div className="space-y-5">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-sm text-white/80 mb-1 uppercase tracking-wide">Founded</div>
                  <div className="text-xl font-bold">January 2023</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-sm text-white/80 mb-1 uppercase tracking-wide">Headquarters</div>
                  <div className="text-xl font-bold">Dhaka, Bangladesh</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-sm text-white/80 mb-1 uppercase tracking-wide">Industry</div>
                  <div className="text-xl font-bold">FinTech • SaaS</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-sm text-white/80 mb-1 uppercase tracking-wide">Team Size</div>
                  <div className="text-xl font-bold">35+ Professionals</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-sm text-white/80 mb-1 uppercase tracking-wide">Operating Region</div>
                  <div className="text-xl font-bold">South Asia & Global</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
        {/* Company Information Grid */}
        <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#5471ff] to-[#8b3ffc] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            Company Information
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Company Name */}
            <div className="group">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 hover:border-[#5471ff]/40 transition-all">
                <div className="text-3xl">🏢</div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Legal Name</div>
                  <div className="text-lg font-bold text-gray-900">Ideanect Limited</div>
                </div>
              </div>
            </div>
            
            {/* Registration */}
            <div className="group">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 hover:border-[#5471ff]/40 transition-all">
                <div className="text-3xl">📋</div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Registration No.</div>
                  <div className="text-lg font-bold text-gray-900">C-187456/2023</div>
                </div>
              </div>
            </div>
            
            {/* TIN */}
            <div className="group">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 hover:border-[#5471ff]/40 transition-all">
                <div className="text-3xl">🔢</div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">TIN Number</div>
                  <div className="text-lg font-bold text-gray-900">123456789012</div>
                </div>
              </div>
            </div>
            
            {/* Address */}
            <div className="group md:col-span-2">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 hover:border-[#5471ff]/40 transition-all">
                <div className="text-3xl">📍</div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Registered Address</div>
                  <div className="text-lg font-bold text-gray-900">House 45, Road 12, Banani, Dhaka 1213, Bangladesh</div>
                </div>
              </div>
            </div>
            
            {/* Business Type */}
            <div className="group">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 hover:border-[#5471ff]/40 transition-all">
                <div className="text-3xl">⚖️</div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Legal Structure</div>
                  <div className="text-lg font-bold text-gray-900">Private Limited Company</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        
        {/* Contact Information - Premium Design */}
        <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#5471ff] to-[#8b3ffc] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            Get in Touch
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Website */}
            <a href="https://ideanect.com" target="_blank" rel="noopener noreferrer" className="group">
              <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-[#5471ff]/10 to-[#5471ff]/5 border-2 border-[#5471ff]/20 hover:border-[#5471ff]/50 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#5471ff] to-[#8b3ffc] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <svg className="w-5 h-5 text-[#5471ff] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="text-sm text-[#5471ff] font-semibold uppercase tracking-wide mb-1">Website</div>
                <div className="text-xl font-bold text-[#5471ff]">www.ideanect.com</div>
              </div>
            </a>
            
            {/* Email */}
            <a href="mailto:contact@ideanect.com" className="group">
              <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-[#7060ff]/10 to-[#7060ff]/5 border-2 border-[#7060ff]/20 hover:border-[#7060ff]/50 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#5471ff] to-[#8b3ffc] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <svg className="w-5 h-5 text-[#7060ff] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="text-sm text-[#7060ff] font-semibold uppercase tracking-wide mb-1">Email</div>
                <div className="text-xl font-bold text-[#7060ff]">contact@ideanect.com</div>
              </div>
            </a>
            
            {/* Phone */}
            <a href="tel:+8801712345678" className="group">
              <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-[#8b3ffc]/10 to-[#8b3ffc]/5 border-2 border-[#8b3ffc]/20 hover:border-[#8b3ffc]/50 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#5471ff] to-[#8b3ffc] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <svg className="w-5 h-5 text-[#8b3ffc] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="text-sm text-[#8b3ffc] font-semibold uppercase tracking-wide mb-1">Phone</div>
                <div className="text-xl font-bold text-[#8b3ffc]">+880 1712-345678</div>
              </div>
            </a>
            
          </div>
        </div>
        
        {/* Core Values - Premium Layout */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-3">Our Core Values</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Ideanect
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Innovation */}
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-[#5471ff]/40 hover:shadow-2xl transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-[#5471ff] to-[#6a5dff] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <span className="text-4xl">💡</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Innovation</h4>
                <p className="text-gray-600 leading-relaxed">
                  Pioneering new solutions and constantly evolving to meet the needs of our dynamic ecosystem.
                </p>
              </div>
            </div>
            
            {/* Trust */}
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-[#6a5dff]/40 hover:shadow-2xl transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-[#6a5dff] to-[#7f50fe] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <span className="text-4xl">🤝</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Trust</h4>
                <p className="text-gray-600 leading-relaxed">
                  Building lasting relationships through transparency, security, and unwavering commitment.
                </p>
              </div>
            </div>
            
            {/* Inclusivity */}
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-[#8b3ffc]/40 hover:shadow-2xl transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-[#7f50fe] to-[#8b3ffc] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <span className="text-4xl">🌍</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Inclusivity</h4>
                <p className="text-gray-600 leading-relaxed">
                  Creating equal opportunities for entrepreneurs from all backgrounds and regions.
                </p>
              </div>
            </div>
            
            {/* Excellence */}
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-[#8b3ffc]/40 hover:shadow-2xl transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-[#8b3ffc] to-[#9e52fc] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <span className="text-4xl">⭐</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Excellence</h4>
                <p className="text-gray-600 leading-relaxed">
                  Delivering outstanding value and maintaining the highest standards in everything we do.
                </p>
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default CompanyDetails;