import React from 'react';
import { Shield, Heart, UserCheck } from 'lucide-react';

const Values = () => {
  const values = [
    {
      icon: Heart,
      title: 'Health',
      description: 'Your mental and emotional wellbeing is our top priority. Every interaction should leave you feeling better, not drained.',
      color: 'bg-gradient-to-br from-red-50 to-pink-50 border-red-200'
    },
    {
      icon: Shield,
      title: 'Safety',
      description: 'A secure environment where you can be yourself without fear of judgment, harassment, or data exploitation.',
      color: 'bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200'
    },
    {
      icon: UserCheck,
      title: 'Trust',
      description: 'Transparent practices, honest communication, and a platform that respects your privacy and choices.',
      color: 'bg-gradient-to-br from-red-50 to-orange-50 border-red-200'
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Our
            <span className="font-kalam text-red-700 ml-3">Values</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            These aren't just words on a wall. They guide every decision we make, 
            every feature we build, and every interaction we enable.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className={`${value.color} rounded-3xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border-2`}>
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icon className="w-8 h-8 text-red-700" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">
                  {value.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed text-center">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;