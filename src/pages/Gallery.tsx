
import React from 'react';
import { Video, Image, Disc, AlertCircle } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent } from '@/components/ui/card';

const Gallery = () => {
  // Gallery items with one real YouTube video
  const galleryItems = [
    { 
      type: 'clip', 
      icon: <Video size={24} />,
      content: {
        type: 'youtube',
        url: 'https://youtube.com/embed/mlQcn3Mo4lE',
        title: 'Édouard\'s Saxophone Performance',
        thumbnail: '/lovable-uploads/93c6e307-2bb0-42a4-b987-a377dd814ef0.png'
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
                  <span className="capitalize">{item.type} - Fête des Mamans</span>
                </div>
                <div className="flex-grow px-4 pb-4 relative group">
                  <div className="w-full h-full relative">
                    <img 
                      src={item.content.thumbnail} 
                      alt="Édouard avec son saxophone" 
                      className="w-full h-full object-cover rounded-md"
                    />
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a 
                        href={item.content.url.replace('embed/', 'shorts/')} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.preventDefault();
                          const modal = document.getElementById('video-modal');
                          if (modal) modal.classList.remove('hidden');
                        }}
                        className="bg-vintage-terracotta hover:bg-vintage-darkTerracotta text-white px-4 py-2 rounded-full flex items-center gap-2 transition-colors"
                      >
                        <Video size={20} />
                        Regarder la vidéo
                      </a>
                    </div>
                  </div>
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
      
      {/* Video modal */}
      <div id="video-modal" className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center hidden">
        <div className="relative w-full max-w-3xl mx-4">
          <button 
            onClick={() => {
              const modal = document.getElementById('video-modal');
              if (modal) modal.classList.add('hidden');
            }}
            className="absolute -top-10 right-0 text-white hover:text-vintage-terracotta"
          >
            Fermer
          </button>
          <AspectRatio ratio={9/16} className="overflow-hidden rounded-md bg-black">
            <iframe 
              src="https://youtube.com/embed/mlQcn3Mo4lE"
              title="Édouard's Saxophone Performance"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </AspectRatio>
        </div>
      </div>
      
      <div className="mt-12 text-center text-vintage-cream/60 italic">
        <p>Plus de contenu à venir</p>
      </div>
    </div>
  );
};

export default Gallery;
