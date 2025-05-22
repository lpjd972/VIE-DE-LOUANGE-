
import React from 'react';
import { Video, Image, Disc, AlertCircle } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Gallery = () => {
  // Gallery items with one real YouTube video
  const galleryItems = [
    { 
      type: 'clip', 
      icon: <Video size={24} />,
      content: {
        type: 'youtube',
        url: 'https://youtube.com/embed/mlQcn3Mo4lE',
        title: 'Édouard\'s Saxophone Performance'
      }
    },
    { type: 'visuel', icon: <Image size={24} /> },
    { type: 'pochette', icon: <Disc size={24} /> },
    { type: 'clip', icon: <Video size={24} /> },
    { type: 'visuel', icon: <Image size={24} /> },
    { type: 'pochette', icon: <Disc size={24} /> }
  ];

  return (
    <div className="vintage-section container mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Galerie & Projets</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {galleryItems.map((item, index) => (
          <div key={index} className="aspect-square vintage-card bg-vintage-cream/5">
            {item.content?.type === 'youtube' ? (
              <div className="h-full flex flex-col">
                <div className="text-vintage-terracotta mb-2 px-4 pt-4 flex items-center gap-2">
                  {item.icon}
                  <span className="capitalize">{item.type}</span>
                </div>
                <div className="flex-grow px-4 pb-4">
                  <AspectRatio ratio={9/16} className="overflow-hidden rounded-md">
                    <iframe 
                      src={item.content.url}
                      title={item.content.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </AspectRatio>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center">
                <div className="text-vintage-terracotta mb-3">
                  {item.icon}
                </div>
                <p className="text-vintage-cream/70 capitalize">{item.type}</p>
                <p className="text-sm text-vintage-cream/50 mt-1">À insérer</p>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center text-vintage-cream/60 italic">
        <p>Plus de contenu à venir</p>
      </div>
    </div>
  );
};

export default Gallery;
