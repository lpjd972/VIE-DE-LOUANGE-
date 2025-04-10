
import React from 'react';
import { Camera } from 'lucide-react';

const About = () => {
  return (
    <div className="vintage-section container mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">À propos de moi</h1>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="vintage-card">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Mini Biographie</h2>
          <p className="text-vintage-cream/90 mb-6">
            Passionné de musique depuis mon plus jeune âge, j'ai commencé mon parcours musical avec les percussions. 
            Au fil des années, j'ai développé mes compétences à la batterie et continue d'explorer de nouveaux 
            instruments qui m'inspirent. Jouer de la musique est pour moi plus qu'un passe-temps, c'est une 
            véritable passion qui me permet de m'exprimer et de partager des émotions.
          </p>
          
          <div className="bg-vintage-terracotta/20 border border-vintage-terracotta/40 p-4 rounded-md mt-8">
            <p className="text-center italic font-medium">
              "Merci au Seigneur Jésus-Christ"
            </p>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="relative w-64 h-80 border-4 border-vintage-cream/30 rounded">
            <div className="absolute inset-0 flex items-center justify-center bg-vintage-cream/10">
              <div className="text-center">
                <Camera size={48} className="mx-auto text-vintage-cream/50 mb-4" />
                <p className="text-vintage-cream/70">Photo à venir</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
