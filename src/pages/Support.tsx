
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

const Support = () => {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  
  useEffect(() => {
    // Load Stripe Buy Button script
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/buy-button.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    
    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <div className="vintage-section container mx-auto px-4 relative overflow-hidden">
      {/* Decorative elements - branches and leaves with right-to-left animation */}
      <div className="absolute top-10 right-0 opacity-0 translate-x-full" ref={(el) => (elementsRef.current[9] = el)}>
        <svg width="120" height="180" viewBox="0 0 120 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 10C80 30 70 80 10 100" stroke="#D45D50" strokeWidth="2" strokeLinecap="round"/>
          <path d="M95 15C90 20 88 25 85 30" stroke="#D45D50" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M80 35C75 40 73 45 70 50" stroke="#D45D50" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M65 55C60 60 58 65 55 70" stroke="#D45D50" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M50 75C45 80 43 85 40 90" stroke="#D45D50" strokeWidth="1.5" strokeLinecap="round"/>
          <ellipse cx="88" cy="25" rx="5" ry="10" transform="rotate(30 88 25)" fill="#EDE6D6" fillOpacity="0.6"/>
          <ellipse cx="73" cy="45" rx="5" ry="10" transform="rotate(30 73 45)" fill="#EDE6D6" fillOpacity="0.6"/>
          <ellipse cx="58" cy="65" rx="5" ry="10" transform="rotate(30 58 65)" fill="#EDE6D6" fillOpacity="0.6"/>
          <ellipse cx="43" cy="85" rx="5" ry="10" transform="rotate(30 43 85)" fill="#EDE6D6" fillOpacity="0.6"/>
        </svg>
      </div>
      
      <div className="absolute bottom-20 right-10 opacity-0 translate-x-full" ref={(el) => (elementsRef.current[10] = el)}>
        <svg width="150" height="200" viewBox="0 0 150 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M120 30C90 60 60 90 30 120" stroke="#D45D50" strokeWidth="2" strokeLinecap="round"/>
          <path d="M110 40C105 45 100 50 95 55" stroke="#D45D50" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M90 60C85 65 80 70 75 75" stroke="#D45D50" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M70 80C65 85 60 90 55 95" stroke="#D45D50" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M50 100C45 105 40 110 35 115" stroke="#D45D50" strokeWidth="1.5" strokeLinecap="round"/>
          <ellipse cx="100" cy="50" rx="6" ry="12" transform="rotate(45 100 50)" fill="#D2BFA8" fillOpacity="0.7"/>
          <ellipse cx="80" cy="70" rx="6" ry="12" transform="rotate(45 80 70)" fill="#D2BFA8" fillOpacity="0.7"/>
          <ellipse cx="60" cy="90" rx="6" ry="12" transform="rotate(45 60 90)" fill="#D2BFA8" fillOpacity="0.7"/>
          <ellipse cx="40" cy="110" rx="6" ry="12" transform="rotate(45 40 110)" fill="#D2BFA8" fillOpacity="0.7"/>
        </svg>
      </div>
      
      <div className="absolute top-1/2 left-0 opacity-0 translate-x-full" ref={(el) => (elementsRef.current[11] = el)}>
        <svg width="100" height="150" viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 75C40 65 70 55 90 20" stroke="#D45D50" strokeWidth="2" strokeLinecap="round"/>
          <path d="M20 70C30 65 40 60 50 55" stroke="#D45D50" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M55 50C60 45 65 40 70 35" stroke="#D45D50" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M75 30C80 25 85 20 90 15" stroke="#D45D50" strokeWidth="1.5" strokeLinecap="round"/>
          <ellipse cx="45" cy="58" rx="5" ry="10" transform="rotate(-20 45 58)" fill="#EDE6D6" fillOpacity="0.6"/>
          <ellipse cx="65" cy="38" rx="5" ry="10" transform="rotate(-20 65 38)" fill="#EDE6D6" fillOpacity="0.6"/>
          <ellipse cx="85" cy="18" rx="5" ry="10" transform="rotate(-20 85 18)" fill="#EDE6D6" fillOpacity="0.6"/>
        </svg>
      </div>

      <h1 
        className="text-4xl md:text-5xl font-bold mb-12 text-center opacity-0 translate-x-full"
        ref={(el) => (elementsRef.current[0] = el)}
      >
        Soutien
      </h1>
      
      <div className="vintage-card max-w-4xl mx-auto mb-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div 
            className="opacity-0 translate-x-full"
            ref={(el) => (elementsRef.current[8] = el)}
          >
            <img 
              src="/lovable-uploads/b094d5d2-56cb-49c1-84a6-a65ae10ed58f.png" 
              alt="Soutiens" 
              className="w-full h-auto rounded-md shadow-lg"
            />
          </div>
          
          <div className="flex flex-col justify-center">
            <h2 
              className="text-2xl md:text-3xl font-bold mb-6 opacity-0 translate-x-full"
              ref={(el) => (elementsRef.current[1] = el)}
            >
              Dons
            </h2>
            
            <p 
              className="text-vintage-cream/90 mb-6 opacity-0 translate-x-full"
              ref={(el) => (elementsRef.current[2] = el)}
            >
              Nous comptons sur votre soutiens par la prière mais également financier afin que ce site puisse continuer à vivre. L'objectif principal du site étant de partager le message de l'évangile à un maximum de personnes grâce à différents outils mis en place.
            </p>
            
            <p 
              className="text-vintage-cream/90 mb-8 opacity-0 translate-x-full"
              ref={(el) => (elementsRef.current[3] = el)}
            >
              A chaque don versé 10 % sera reversé pour l'oeuvre missionnaire du SEL.
            </p>
            
            {/* Donation button section */}
            <div 
              className="opacity-0 translate-x-full mb-8"
              ref={(el) => (elementsRef.current[12] = el)}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <Button 
                  className="bg-vintage-terracotta hover:bg-vintage-darkTerracotta text-vintage-cream font-medium flex items-center gap-2 px-6 py-5"
                  onClick={() => {
                    const stripeContainer = document.getElementById('stripe-donation-container');
                    if (stripeContainer) {
                      stripeContainer.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <Heart className="w-5 h-5" />
                  Faire un don
                </Button>
                <span className="text-vintage-cream/80 italic text-sm">Votre générosité permet à ce ministère de continuer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div 
        className="vintage-card max-w-5xl mx-auto opacity-0 translate-x-full"
        ref={(el) => (elementsRef.current[4] = el)}
      >
        <div className="relative">
          <img 
            src="/lovable-uploads/f0635c91-86eb-4b22-b781-fda68db1d487.png" 
            alt="SEL - Service d'Entraide et de Liaison" 
            className="w-full h-auto rounded-lg shadow-xl"
          />
          <div 
            className="bg-vintage-terracotta/20 border border-vintage-terracotta/40 p-4 rounded-md mt-8"
            ref={(el) => (elementsRef.current[7] = el)}
          >
            <p className="text-center italic font-medium">
              "Votre soutien est précieux pour le développement de nouveaux projets"
            </p>
          </div>
        </div>
      </div>

      {/* Stripe donation section */}
      <div 
        id="stripe-donation-container"
        className="vintage-card max-w-3xl mx-auto mt-16 opacity-0 translate-x-full text-center"
        ref={(el) => (elementsRef.current[13] = el)}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Faire un don
        </h2>
        
        <div className="flex justify-center">
          {/* Using dangerouslySetInnerHTML to render the Stripe Buy Button */}
          <div
            dangerouslySetInnerHTML={{
              __html: `
                <stripe-buy-button
                  buy-button-id="buy_btn_1R0MlJKHh5gia1OaJ4jyqxDW"
                  publishable-key="pk_live_51QDBMFKHh5gia1OawoKLfdAVwzEDTvHk8fdSZaWZGCvdPtFSE2ZFN8LejyIm01Ycq5fP3MiXDZKLo16k9Ba4Gsuy00k4HdzgQS"
                >
                </stripe-buy-button>
              `
            }}
          />
        </div>
        
        <p className="mt-6 text-vintage-cream/80 italic text-sm">
          Tous les dons sont sécurisés via Stripe
        </p>
      </div>
    </div>
  );
};

export default Support;
