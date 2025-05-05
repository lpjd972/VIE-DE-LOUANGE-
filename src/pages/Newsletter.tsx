
import React from 'react';
import { Newspaper } from 'lucide-react';

const Newsletter = () => {
  return (
    <div className="vintage-section container mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Newsletter & Articles</h1>
      
      <div className="vintage-card max-w-3xl mx-auto text-center">
        <Newspaper size={64} className="mx-auto text-vintage-cream/70 mb-6" />
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Articles & Blog</h2>
        <p className="text-vintage-cream/90 mb-6">
          Cette section est en cours de développement. Bientôt, vous pourrez y retrouver mes articles, 
          réflexions et actualités musicales. Abonnez-vous pour ne rien manquer!
        </p>
        <div className="bg-vintage-terracotta/20 border border-vintage-terracotta/40 p-4 rounded-md mt-8">
          <p className="text-center italic font-medium">
            "De nouvelles publications arriveront prochainement"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
