
import React from 'react';
import { Music, Globe, Heart } from 'lucide-react';

const Inspirations = () => {
  const musicStyles = [
    { name: "Gospel", icon: <Music size={20} />, description: "Spirituel et rythmé" },
    { name: "Louange", icon: <Heart size={20} />, description: "Expressif et mélodieux" },
    { name: "Adoration", icon: <Heart size={20} />, description: "Profond et méditatif" },
    { name: "World Music", icon: <Globe size={20} />, description: "Varié et culturel" },
    { name: "Rythmes africains", icon: <Music size={20} />, description: "Énergique et authentique" }
  ];
  
  const futureStyles = ["Jazz", "Funk", "Soul", "RnB"];

  return (
    <div className="vintage-section container mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Inspirations & Répertoire</h1>
      
      <div className="vintage-card max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4">Mon univers musical</h2>
        <p className="text-vintage-cream/90 mb-6">
          Je joue principalement dans un contexte d'église, ce qui me permet d'explorer une variété de styles musicaux.
          J'apprécie particulièrement la richesse des harmonies et la profondeur des messages portés par cette musique.
          Cela ne m'empêche pas d'être ouvert à d'autres influences qui nourrissent ma créativité.
        </p>
      </div>
      
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Styles explorés</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {musicStyles.map((style, index) => (
            <div key={index} className="vintage-card bg-vintage-cream/5 text-center">
              <div className="text-vintage-terracotta mb-2">{style.icon}</div>
              <h3 className="text-xl font-semibold mb-1">{style.name}</h3>
              <p className="text-sm text-vintage-cream/70">{style.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">À venir</h2>
        
        <div className="vintage-card bg-vintage-cream/5">
          <h3 className="text-xl font-semibold mb-4">Futurs styles à explorer</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {futureStyles.map((style, index) => (
              <div key={index} className="bg-vintage-teal border border-vintage-cream/10 rounded p-3 text-center">
                <p className="text-vintage-cream/80">{style}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 border-t border-vintage-cream/20 pt-4">
            <h3 className="text-xl font-semibold mb-3">Collaborations futures</h3>
            <p className="text-vintage-cream/70 italic">
              Cet espace sera dédié à mes futures collaborations musicales et aux projets à venir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inspirations;
