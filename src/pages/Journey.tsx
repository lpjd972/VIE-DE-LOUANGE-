
import React from 'react';
import { Music2, Drum, Radio, Heart } from 'lucide-react';

const Journey = () => {
  return (
    <div className="vintage-section container mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Mon Parcours Musical</h1>
      
      <div className="max-w-3xl mx-auto">
        <div className="space-y-6">
          <div className="vintage-timeline-item">
            <div className="ml-4">
              <div className="flex items-center gap-3 mb-2">
                <Music2 size={24} className="text-vintage-terracotta" />
                <h3 className="text-xl font-bold">Début en percussion</h3>
              </div>
              <p className="text-vintage-cream/80">
                J'ai commencé mon parcours musical à l'école en apprenant les bases de la percussion.
                Cette initiation m'a permis de découvrir mon intérêt pour les rythmes et les sonorités variées.
              </p>
            </div>
          </div>
          
          <div className="vintage-timeline-item">
            <div className="ml-4">
              <div className="flex items-center gap-3 mb-2">
                <Drum size={24} className="text-vintage-terracotta" />
                <h3 className="text-xl font-bold">Batterie à l'ADD de Biarritz</h3>
              </div>
              <p className="text-vintage-cream/80">
                J'ai poursuivi mon apprentissage musical à l'Assemblée de Dieu de Biarritz, où j'ai pu
                développer mes compétences à la batterie. J'ai principalement appris à jouer à l'oreille,
                me permettant de m'adapter facilement à différents styles musicaux.
              </p>
            </div>
          </div>
          
          <div className="vintage-timeline-item">
            <div className="ml-4">
              <div className="flex items-center gap-3 mb-2">
                <Radio size={24} className="text-vintage-terracotta" />
                <h3 className="text-xl font-bold">Découverte d'un nouvel instrument</h3>
              </div>
              <p className="text-vintage-cream/80">
                Récemment, j'ai découvert un nouvel instrument qui m'inspire particulièrement et
                m'ouvre de nouvelles perspectives musicales. Je continue d'explorer ses possibilités
                et d'élargir mon répertoire.
              </p>
            </div>
          </div>
          
          <div className="vintage-timeline-item">
            <div className="ml-4">
              <div className="flex items-center gap-3 mb-2">
                <Heart size={24} className="text-vintage-terracotta" />
                <h3 className="text-xl font-bold">SOUTIEN EVOLUTIFS</h3>
              </div>
              <p className="text-vintage-cream/80">
                Suite à cela ma famille et moi même vous annonçons un onglet "soutien" que l'on a mis en place 
                pour nous aider dans notre ministère vous le retrouverai après l'onglet "Newsletter" 
                en haut droite dans l'en-tête du site 😊
              </p>
            </div>
          </div>
          
          <div className="vintage-timeline-item">
            <div className="ml-4">
              <div className="vintage-card bg-vintage-cream/5">
                <h3 className="text-xl font-bold mb-3">À venir...</h3>
                <p className="text-vintage-cream/70 italic">
                  Cette timeline sera complétée au fur et à mesure de mon parcours musical.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
