import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToGrades = () => {
    document.getElementById('grades')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/70 to-gray-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        

        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Stay Safe.<br />
          Keep Learning.
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Access <span className="font-bold text-white">1100+</span> essential school documents, past papers, and short notes from Grade 1 to University. Designed to be fast and accessible, even during floods and power cuts.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button 
            onClick={scrollToGrades}
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-8 py-6 text-base rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Find Your Grade
          </Button>
          <Button 
            variant="outline" 
            className="bg-transparent border-2 border-white/40 hover:bg-white/10 text-white font-medium px-8 py-6 text-base rounded-full transition-all duration-300"
          >
            How to Download
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;