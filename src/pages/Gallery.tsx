
import React from 'react';
import { Video, Image, Disc, AlertCircle } from 'lucide-react';

const Gallery = () => {
  // Placeholder gallery items
  const galleryItems = [
    { type: 'clip', icon: <Video size={24} /> },
    { type: 'visuel', icon: <Image size={24} /> },
    { type: 'pochette', icon: <Disc size={24} /> },
    { type: 'clip', icon: <Video size={24} /> },
    { type: 'visuel', icon: <Image size={24} /> },
    { type: 'pochette', icon: <Disc size={24} /> }
  ];

  return (
    <div className="vintage-section container mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Galerie & Projets</h1>
      
      <div className="vintage-card max-w-3xl mx-auto mb-12">
        <div className="flex items-center gap-3 mb-4">
          <AlertCircle size={24} className="text-vintage-terracotta" />
          <h2 className="text-2xl font-bold">À venir</h2>
        </div>
        <p className="text-vintage-cream/90">
          Cette section sera enrichie au fil de mon parcours musical, avec des clips, visuels et pochettes
          de morceaux. Revenez bientôt pour découvrir mes créations!
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {galleryItems.map((item, index) => (
          <div key={index} className="aspect-square vintage-card bg-vintage-cream/5 flex flex-col items-center justify-center">
            <div className="text-vintage-terracotta mb-3">
              {item.icon}
            </div>
            <p className="text-vintage-cream/70 capitalize">{item.type}</p>
            <p className="text-sm text-vintage-cream/50 mt-1">À insérer</p>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center text-vintage-cream/60 italic">
        <p>Placeholder pour futurs contenus multimédias</p>
      </div>
    </div>
  );
};

export default Gallery;
