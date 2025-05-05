
import React from 'react';
import { HandHeart } from 'lucide-react';

const Support = () => {
  return (
    <div className="vintage-section container mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Soutien</h1>
      
      <div className="vintage-card max-w-3xl mx-auto text-center">
        <HandHeart size={64} className="mx-auto text-vintage-cream/70 mb-6" />
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Me soutenir</h2>
        <p className="text-vintage-cream/90 mb-6">
          Cette section est en cours de développement. Elle permettra bientôt de soutenir mon parcours 
          musical et mes projets artistiques de différentes manières.
        </p>
        <div className="bg-vintage-terracotta/20 border border-vintage-terracotta/40 p-4 rounded-md mt-8">
          <p className="text-center italic font-medium">
            "Votre soutien est précieux pour le développement de nouveaux projets"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;
