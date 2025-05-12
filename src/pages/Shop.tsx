
import React from 'react';
import { ShoppingCart, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Shop = () => {
  return (
    <div className="vintage-section container mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Boutique</h1>
      
      <div className="max-w-5xl mx-auto">
        {/* First product */}
        <div className="vintage-card mb-12 p-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Collection Disponible</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="aspect-square bg-vintage-cream/10 rounded-lg overflow-hidden flex items-center justify-center">
              <img 
                src="/lovable-uploads/3c87d331-f2be-4674-b12b-f1e68f578413.png" 
                alt="Saxophone JESUS Collection" 
                className="object-contain w-full h-full p-4"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Ma Collection sur Redbubble</h3>
              <p className="text-vintage-cream/90">
                Découvrez ma première collection d'articles disponible sur Redbubble. Des designs uniques 
                inspirés par ma passion musicale.
              </p>
              <div className="flex gap-4 pt-4">
                <Button 
                  variant="outline" 
                  className="border-vintage-terracotta text-vintage-cream hover:bg-vintage-terracotta/20"
                  onClick={() => window.open('https://www.redbubble.com/fr/shop/ap/170442311?asc=u', '_blank')}
                >
                  Voir la collection <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Coming Soon Section */}
        <div className="vintage-card text-center">
          <ShoppingCart size={64} className="mx-auto text-vintage-cream/70 mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Plus de produits à venir</h2>
          <p className="text-vintage-cream/90 mb-6">
            D'autres produits et merchandising seront bientôt disponibles dans cette boutique. 
            Revenez régulièrement pour découvrir les nouveautés.
          </p>
          <div className="bg-vintage-terracotta/20 border border-vintage-terracotta/40 p-4 rounded-md mt-8">
            <p className="text-center italic font-medium">
              "Revenez bientôt pour découvrir notre sélection complète"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
