import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative bg-luxury min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-20"></div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-purple-dark/70 to-transparent"></div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-2 border border-[#c6a355] rounded-full text-[#c6a355] text-sm mb-6">
              WELCOME TO SO EASY INTERNATIONAL
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gradient">Five Star</span>
              <span className="text-white"> Success</span>
            </h1>
            
            <div className="w-24 h-1 bg-gradient-to-r from-[#c6a355] to-[#e9d5aa] mx-auto mb-8"></div>
            
            <p className="text-xl md:text-2xl mb-12 text-gray-300 leading-relaxed">
              Experience excellence through our innovative five-star system, where luxury meets success in perfect harmony.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <a 
              href="#register" 
              className="bg-gradient-to-r from-[#c6a355] to-[#e9d5aa] text-black font-bold px-8 py-4 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(198,163,85,0.3)] text-center"
            >
              Begin Your Journey
            </a>
            <a 
              href="#wallets" 
              className="bg-transparent border-2 border-[#c6a355] text-[#c6a355] font-bold px-8 py-4 rounded-full transition duration-300 transform hover:scale-105 hover:bg-[#c6a355] hover:text-black text-center"
            >
              Discover More
            </a>
          </div>
          
          <div className="flex justify-center space-x-8 text-center">
            <div>
              <div className="text-[#c6a355] text-4xl font-bold mb-2">5+</div>
              <div className="text-gray-400">Income Channels</div>
            </div>
            <div className="border-l border-[#c6a355]/30"></div>
            <div>
              <div className="text-[#c6a355] text-4xl font-bold mb-2">10x</div>
              <div className="text-gray-400">Credit Value</div>
            </div>
            <div className="border-l border-[#c6a355]/30"></div>
            <div>
              <div className="text-[#c6a355] text-4xl font-bold mb-2">∞</div>
              <div className="text-gray-400">Potential</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#wallets" className="text-[#c6a355] hover:text-[#e9d5aa] transition-colors">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;