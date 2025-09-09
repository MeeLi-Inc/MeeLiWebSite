import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Values from './components/Values';
import Status from './components/Status';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Hero />
      <section className="py-12 bg-gradient-to-b from-orange-100 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center space-x-8">
            <img 
              src="/images/WhatsApp Image 2025-08-28 at 19.35.26_f94173cd.jpg" 
              alt="Campus connections" 
              className="w-40 h-40 rounded-2xl object-cover shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-300"
            />
            <img 
              src="/images/WhatsApp Image 2025-08-28 at 19.36.56_b922d5bc.jpg" 
              alt="Student life moments" 
              className="w-44 h-44 rounded-2xl object-cover shadow-xl transform -rotate-1 hover:rotate-0 transition-transform duration-300"
            />
            <img 
              src="/images/WhatsApp Image 2025-08-28 at 19.35.26_e82f5c56.jpg" 
              alt="Authentic student moments" 
              className="w-40 h-40 rounded-2xl object-cover shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300"
            />
          </div>
        </div>
      </section>
      <About />
      <Values />
      <Status />
      <Footer />
    </div>
  );
}

export default App;