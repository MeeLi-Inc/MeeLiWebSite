import React from 'react';
import { Users, Shield, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            What is
            <span className="font-kalam text-red-700 ml-3">MeeLi?</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We're building a social platform that prioritizes your wellbeing over engagement metrics. 
            Where authentic connections matter more than follower counts.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center group">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300 border border-red-200">
              <BookOpen className="w-10 h-10 text-red-700" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">For Students</h3>
            <p className="text-slate-600 leading-relaxed">
              Built specifically for student life, understanding the unique challenges 
              and opportunities of your academic journey.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300 border border-red-200">
              <Shield className="w-10 h-10 text-red-700" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Healthy First</h3>
            <p className="text-slate-600 leading-relaxed">
              Every feature is designed with mental health and digital wellness in mind. 
              No infinite scroll, no manipulation.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300 border border-red-200">
              <Users className="w-10 h-10 text-red-700" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Authentic Connections</h3>
            <p className="text-slate-600 leading-relaxed">
              Real conversations, genuine friendships, and meaningful experiences 
              that enhance your life beyond the screen.
            </p>
          </div>
        </div>
        
        <div className="mt-20 bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-12 text-center relative border border-red-200 shadow-lg">
          <div className="absolute top-4 left-8 text-6xl font-kalam text-slate-200 opacity-50">"</div>
          <div className="absolute bottom-4 right-8 text-6xl font-kalam text-slate-200 opacity-50">"</div>
          
          <blockquote className="text-2xl md:text-3xl font-medium text-slate-700 italic mb-6 relative z-10">
            Let's build offline connections instead of online engagement!
          </blockquote>
          
          <cite className="font-kalam text-lg text-red-700 not-italic">
            - The MeeLi Team
          </cite>
        </div>
      </div>
    </section>
  );
};

export default About;