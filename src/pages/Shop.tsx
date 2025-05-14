
import React from 'react';
import { ShoppingCart, ExternalLink, Presentation, Store } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

const Shop = () => {
  const collections = [
    {
      title: "Collection Instruments de Musique",
      image: "/lovable-uploads/f34656d6-bb40-443e-b53f-2ae8266c6850.png",
      description: "Découvrez ma première collection d'articles disponible sur Redbubble. Des designs uniques inspirés par ma passion musicale.",
      link: "https://www.redbubble.com/fr/shop/ap/170487847?asc=u"
    },
    {
      title: "Collection Saxophone JESUS",
      image: "/lovable-uploads/3c87d331-f2be-4674-b12b-f1e68f578413.png",
      description: "Ma collection spéciale avec des designs uniques de saxophone. Exprimez votre foi et votre amour pour la musique avec cette collection exclusive.",
      link: "https://www.redbubble.com/fr/shop/ap/170442311?asc=u"
    },
    {
      title: "JESUS EST ROI",
      image: "/lovable-uploads/d6a5877c-ea40-488e-acc6-3380c82c142e.png",
      description: "Explorez ma nouvelle collection dédiée à la foi chrétienne. Des designs élégants pour tous les croyants.",
      link: "https://www.redbubble.com/fr/shop/ap/170486995?asc=u"
    },
    {
      title: "Gospel Sax Edition",
      image: "/lovable-uploads/94e86876-1880-4f94-9f09-043177e2dc6c.png",
      description: "Découvrez notre collection Gospel Sax avec des designs dorés élégants. L'harmonie parfaite entre musique et spiritualité.",
      link: "https://www.redbubble.com/fr/shop/ap/170678156?asc=u"
    }
  ];

  return (
    <div className="vintage-section container mx-auto px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header Section with Business Plan Style */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Boutique</h1>
          <div className="w-24 h-1 bg-vintage-terracotta mx-auto mb-6"></div>
          <p className="text-vintage-cream/90 max-w-2xl mx-auto">
            Découvrez nos collections d'articles inspirées par la musique et la foi.
            Des designs uniques pour exprimer votre passion.
          </p>
        </div>
        
        {/* Main Collections Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {collections.map((collection, index) => (
            <div key={index} className="vintage-card h-full flex flex-col">
              <div className="aspect-square bg-vintage-cream/10 rounded-lg overflow-hidden flex items-center justify-center mb-6">
                <img 
                  src={collection.image}
                  alt={collection.title} 
                  className="object-contain w-full h-full p-4"
                />
              </div>
              <div className="space-y-4 flex-grow flex flex-col">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-2">{collection.title}</h3>
                  <p className="text-vintage-cream/80">
                    {collection.description}
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  className="border-vintage-terracotta text-vintage-cream hover:bg-vintage-terracotta/20 w-full mt-4"
                  onClick={() => window.open(collection.link, '_blank')}
                >
                  Voir la collection <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="vintage-card mb-16 p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Notre Proposition</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-vintage-terracotta/20 flex items-center justify-center mx-auto mb-4">
                <Store className="h-8 w-8 text-vintage-terracotta" />
              </div>
              <h3 className="font-bold mb-2">Designs Uniques</h3>
              <p className="text-vintage-cream/80">Des créations originales inspirées par la passion de la musique et la foi.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-vintage-terracotta/20 flex items-center justify-center mx-auto mb-4">
                <Presentation className="h-8 w-8 text-vintage-terracotta" />
              </div>
              <h3 className="font-bold mb-2">Qualité Premium</h3>
              <p className="text-vintage-cream/80">Des produits de haute qualité pour une satisfaction garantie.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-vintage-terracotta/20 flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="h-8 w-8 text-vintage-terracotta" />
              </div>
              <h3 className="font-bold mb-2">Variété de Produits</h3>
              <p className="text-vintage-cream/80">De nombreux supports disponibles pour chaque design.</p>
            </div>
          </div>
        </div>
        
        {/* Carousel for Mobile View */}
        <div className="vintage-card mb-16 p-6 md:hidden">
          <h2 className="text-2xl font-bold mb-6 text-center">Collections Disponibles</h2>
          
          <Carousel className="w-full">
            <CarouselContent>
              {collections.map((collection, index) => (
                <CarouselItem key={index}>
                  <div className="space-y-4 p-2">
                    <div className="aspect-square bg-vintage-cream/10 rounded-lg overflow-hidden flex items-center justify-center">
                      <img 
                        src={collection.image}
                        alt={collection.title} 
                        className="object-contain w-full h-full p-4"
                      />
                    </div>
                    <h3 className="text-xl font-bold">{collection.title}</h3>
                    <p className="text-vintage-cream/90">
                      {collection.description}
                    </p>
                    <Button 
                      variant="outline" 
                      className="border-vintage-terracotta text-vintage-cream hover:bg-vintage-terracotta/20 w-full"
                      onClick={() => window.open(collection.link, '_blank')}
                    >
                      Voir la collection <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
        
        {/* Coming Soon Section */}
        <div className="vintage-card text-center">
          <ShoppingCart size={64} className="mx-auto text-vintage-cream/70 mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Plus de produits à venir</h2>
          <p className="text-vintage-cream/90 mb-6">
            D'autres collections et produits seront bientôt disponibles dans cette boutique. 
            Revenez régulièrement pour découvrir nos nouveautés.
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
