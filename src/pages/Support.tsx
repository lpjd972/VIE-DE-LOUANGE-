
import React, { useEffect, useRef } from 'react';

const Support = () => {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    
    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <div className="vintage-section container mx-auto px-4">
      <h1 
        className="text-4xl md:text-5xl font-bold mb-12 text-center opacity-0 -translate-x-full"
        ref={(el) => (elementsRef.current[0] = el)}
      >
        Soutien
      </h1>
      
      <div className="vintage-card max-w-4xl mx-auto mb-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div 
            className="opacity-0 -translate-x-full"
            ref={(el) => (elementsRef.current[8] = el)}
          >
            <img 
              src="/lovable-uploads/b094d5d2-56cb-49c1-84a6-a65ae10ed58f.png" 
              alt="Soutiens" 
              className="w-full h-auto rounded-md shadow-lg"
            />
          </div>
          
          <div className="flex flex-col justify-center">
            <h2 
              className="text-2xl md:text-3xl font-bold mb-6 opacity-0 -translate-x-full"
              ref={(el) => (elementsRef.current[1] = el)}
            >
              Dons
            </h2>
            
            <p 
              className="text-vintage-cream/90 mb-6 opacity-0 -translate-x-full"
              ref={(el) => (elementsRef.current[2] = el)}
            >
              Nous comptons sur votre soutiens par la prière mais également financier afin que ce site puisse continuer à suivre. L'objectif principal du site étant de partager le message de l'évangile à un maximum de personnes grâce à différents outils mis en place.
            </p>
            
            <p 
              className="text-vintage-cream/90 mb-8 opacity-0 -translate-x-full"
              ref={(el) => (elementsRef.current[3] = el)}
            >
              A chaque don versé 10 % sera reversé pour l'oeuvre missionnaire du SEL.
            </p>
          </div>
        </div>
      </div>
      
      <div 
        className="vintage-card max-w-5xl mx-auto opacity-0 -translate-x-full"
        ref={(el) => (elementsRef.current[4] = el)}
      >
        <div className="relative">
          <img 
            src="/lovable-uploads/f0635c91-86eb-4b22-b781-fda68db1d487.png" 
            alt="SEL - Service d'Entraide et de Liaison" 
            className="w-full h-auto rounded-lg shadow-xl"
          />
          <div 
            className="bg-vintage-terracotta/20 border border-vintage-terracotta/40 p-4 rounded-md mt-8"
            ref={(el) => (elementsRef.current[7] = el)}
          >
            <p className="text-center italic font-medium">
              "Votre soutien est précieux pour le développement de nouveaux projets"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
