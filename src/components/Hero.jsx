import React from 'react';
import { Button } from 'antd';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900">
      <div className="particle-bg"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-primary-400 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="text-sm font-medium text-gray-400 tracking-wider uppercase">
              Energy Performance Platform
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-white">Accelerating</span>
            <span className="block gradient-text">the Energy Future</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Drive efficiency, productivity, and profitability with our innovative energy solutions.
          </p>

          {/* CTA Button */}
          <Button
            className="btn-primary px-8 py-6 h-auto text-lg font-semibold text-white inline-flex items-center gap-3"
          >
            Discover More
            <ArrowRight size={20} />
          </Button>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-900 to-transparent"></div>
    </section>
  );
};

export default Hero;