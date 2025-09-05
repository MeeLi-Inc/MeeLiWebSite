import React from 'react';
import { Instagram, Code, Zap } from 'lucide-react';

const Status = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-12">
          <div className="flex items-center justify-center mb-6">
            <Code className="w-8 h-8 text-red-700 mr-3" />
            <span className="font-kalam text-2xl text-slate-700">Currently</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-slate-800">
            <span className="font-kalam text-red-700">In Development</span>
          </h2>
          
          <p className="text-xl text-slate-600 leading-relaxed mb-12 max-w-2xl mx-auto">
            We're working hard to create something truly special. A platform that puts your 
            wellbeing first and creates genuine connections between students.
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 mb-12 border border-red-200 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 flex items-center justify-center text-slate-800">
            <Zap className="w-6 h-6 mr-2 text-yellow-500" />
            What We're Building
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
            <div className="bg-white p-4 rounded-2xl border border-red-200 shadow-sm">
              <h4 className="font-semibold mb-2 text-red-700">✨ Mindful Interactions</h4>
              <p className="text-slate-600 text-sm">No endless scrolling or addiction mechanics</p>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-red-200 shadow-sm">
              <h4 className="font-semibold mb-2 text-orange-600">🛡️ Privacy First</h4>
              <p className="text-slate-600 text-sm">Your data belongs to you, always</p>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-red-200 shadow-sm">
              <h4 className="font-semibold mb-2 text-red-600">🎓 Student-Focused</h4>
              <p className="text-slate-600 text-sm">Features built for academic and social balance</p>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-red-200 shadow-sm">
              <h4 className="font-semibold mb-2 text-pink-600">💙 Mental Health</h4>
              <p className="text-slate-600 text-sm">Tools to support your emotional wellbeing</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <p className="text-lg text-slate-600">
            Want to stay updated on our progress?
          </p>
          
          <a
            href="https://instagram.com/meelimeetlife"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Instagram className="w-6 h-6 mr-3" />
            Follow our Journey
          </a>
          
          <p className="text-slate-500 text-sm max-w-md mx-auto">
            Get behind-the-scenes updates, meet the team, and be the first to know when we launch!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Status;