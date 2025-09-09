import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Logo */}
        <div className="mb-8 flex items-center justify-center space-x-4">
          <img 
            src="/images/WhatsApp Image 2025-07-19 at 13.50.42_f2aedb83.jpg" 
            alt="MeeLi Logo" 
            className="w-16 h-16 rounded-2xl shadow-lg"
          />
          <h1 className="font-kalam text-5xl md:text-6xl font-bold text-slate-800">
            MeeLi
          </h1>
        </div>
        
        {/* Tagline */}
        <div className="mb-8">
          <span className="font-kalam text-xl text-red-700 italic">
            Meet Life
          </span>
        </div>
        
        {/* Development Status */}
        <div className="mb-8">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-red-200 shadow-lg">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-pulse"></div>
            <span className="font-medium text-slate-700">Currently in Development</span>
          </div>
        </div>
        
        {/* Mission Statement */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight text-slate-800">
          Bringing the soul back to
          <span className="font-kalam text-red-700 block mt-2">
            social media
          </span>
        </h2>
        
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-12">
          A healthy social app for students who want authentic connections 
          and meaningful interactions in their digital lives.
        </p>
        
        {/* CTA */}
        <div className="space-y-4">
          <button className="bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center transform hover:scale-105">
            Join the Movement
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
          <p className="text-slate-500 text-sm">
            Coming soon to app stores
          </p>
          <div className="mt-12 pt-8 border-t border-orange-200">
            <p className="font-kalam text-xl md:text-2xl text-slate-700 italic">
              Deeper Connections. Exploring the Unknown. Finding Yourself.
            </p>
            <p className="text-red-700 font-semibold mt-2">
              - <span className="underline">Soul</span>cial Media
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;