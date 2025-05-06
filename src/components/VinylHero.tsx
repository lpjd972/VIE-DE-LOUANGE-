
import React from 'react';
import { Music, Disc, Headphones, Instagram, Mail, Youtube, ChevronDown } from 'lucide-react';

const VinylHero = () => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      <div className="texture-overlay"></div>
      
      {/* Floating musical notes - decorative elements */}
      <div className="absolute top-[15%] left-[15%] text-vintage-terracotta opacity-60">
        <Music size={40} className="transform rotate-12" />
      </div>
      <div className="absolute bottom-[25%] right-[15%] text-vintage-terracotta opacity-70">
        <Music size={30} className="transform -rotate-12" />
      </div>
      
      {/* Main content */}
      <div className="text-center z-10 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold text-vintage-cream mb-4">ÉDOUARD'S</h1>
        <h2 className="text-2xl md:text-3xl font-light text-vintage-cream/80 mb-12">Portfolio Musical</h2>
        
        <div className="relative flex justify-center mb-16">
          {/* Vinyl record animation */}
          <div className="vinyl-record animate-spin-slow z-10">
            <div className="vinyl-grooves"></div>
            <div className="vinyl-center"></div>
          </div>
          
          {/* Visual overlay icon */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <Disc size={40} className="text-vintage-terracotta" />
          </div>
        </div>
        
        {/* Contact buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a href="#" className="vintage-button flex items-center gap-2">
            <Mail size={18} />
            <span>Email</span>
          </a>
          <a href="https://www.instagram.com/jean_denis_972/" target="_blank" rel="noopener noreferrer" className="vintage-button flex items-center gap-2">
            <Instagram size={18} />
            <span>Instagram</span>
          </a>
          <a href="https://www.youtube.com/channel/UCnq2y0lbnKHDJDzGNYh17_g" target="_blank" rel="noopener noreferrer" className="vintage-button flex items-center gap-2">
            <Youtube size={18} />
            <span>YouTube</span>
          </a>
          <a href="#" className="vintage-button flex items-center gap-2">
            <Headphones size={18} />
            <span>Soundcloud</span>
          </a>
        </div>
        
        {/* Scroll indicator */}
        <button 
          onClick={scrollToNext}
          className="animate-bounce text-vintage-cream/60 hover:text-vintage-cream transition-colors"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </div>
  );
};

export default VinylHero;
