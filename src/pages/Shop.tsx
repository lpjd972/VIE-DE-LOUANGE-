
import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Shop = () => {
  return (
    <div className="vintage-section container mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Boutique</h1>
      
      <div className="vintage-card max-w-3xl mx-auto text-center">
        <ShoppingCart size={64} className="mx-auto text-vintage-cream/70 mb-6" />
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Boutique en construction</h2>
        <p className="text-vintage-cream/90 mb-6">
          Cette section est en cours de développement. Bientôt, vous pourrez y retrouver mes produits, 
          merchandising et supports musicaux.
        </p>
        <div className="bg-vintage-terracotta/20 border border-vintage-terracotta/40 p-4 rounded-md mt-8">
          <p className="text-center italic font-medium">
            "Revenez bientôt pour découvrir notre sélection"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shop;
