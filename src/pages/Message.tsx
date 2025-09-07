
import React from 'react';
import { MessageSquare, Heart, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Message = () => {
  return (
    <div className="vintage-section container mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Messages</h1>
      
      {/* Image ajoutée entre le titre et le contenu */}
      <div className="flex justify-center mb-8 px-4">
        <img 
          src="/lovable-uploads/4e08423d-b2c4-409e-b728-f1e23bc23271.png" 
          alt="Soutiens VIE DE LOUANGE - 2€ par mois pour faire vivre sa musique"
          className="max-w-full w-full sm:max-w-md h-auto rounded-lg shadow-lg"
        />
      </div>
      
      <div className="vintage-card max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <MessageSquare size={48} className="mx-auto text-vintage-cream/70 mb-4 sm:mb-6" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Un Message du Cœur</h2>
        </div>
        
        <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg leading-relaxed">
          <p>
            Salut ! J'espère que tu vas bien 😊
          </p>
          
          <p>
            Je me permets de t'envoyer ce petit message car j'ai besoin de ton aide 🙏
          </p>
          
          <p>
            Tu sais peut-être que je suis en train de développer ma musique, avec passion et foi. 
            C'est un vrai projet de cœur que je porte pour inspirer, encourager, et transmettre un message positif.
          </p>
          
          <div className="bg-vintage-terracotta/20 border border-vintage-terracotta/40 p-4 sm:p-6 rounded-lg my-6 sm:my-8">
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              Je lance aujourd'hui une petite campagne de soutien à <strong>2 €/mois</strong>, pour m'aider à :
            </p>
            <ul className="list-disc list-inside space-y-1 sm:space-y-2 ml-2 sm:ml-4 text-sm sm:text-base">
              <li>financer mes sessions, m'améliorer en me formant auprès de musiciens,</li>
              <li>continuer à créer du contenu inspirant,</li>
              <li>et faire grandir ma musique pour la <strong>GLOIRE DE DIEU NOTRE SAUVEUR</strong>.</li>
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2 text-sm sm:text-lg font-semibold text-vintage-terracotta my-6 sm:my-8 text-center px-2">
            <div className="flex items-center space-x-2">
              <span>👉</span>
              <Coffee size={20} className="sm:w-6 sm:h-6" />
            </div>
            <span className="text-xs sm:text-base md:text-lg">Pour 2 € par mois (le prix d'un café ☕), tu peux rejoindre ma team soutien et m'aider à faire vivre cette aventure 🎷🔥</span>
          </div>
          
          <div className="text-center bg-vintage-cream/10 border border-vintage-cream/30 p-4 sm:p-6 rounded-lg">
            <p className="text-base sm:text-lg font-medium mb-3 sm:mb-4">
              Lien pour me soutenir :
            </p>
            <Button 
              className="bg-vintage-terracotta hover:bg-vintage-darkTerracotta text-vintage-cream font-bold px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-lg"
              onClick={() => window.open('https://buy.stripe.com/eVqdRa8YiceG6qQbEnco009', '_blank')}
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Rejoindre ma team soutien
            </Button>
          </div>
          
          <p>
            Bien sûr, il n'y a aucune obligation — mais si tu crois en ce que je fais, ton soutien ferait vraiment la différence. 
            Et même un partage de ce message, ça compte énormément 🙏
          </p>
          
          <div className="text-center mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-vintage-cream/30">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2 text-lg sm:text-xl">
              <Heart size={20} className="sm:w-6 sm:h-6 text-vintage-terracotta" />
              <span className="text-sm sm:text-base md:text-lg">Merci de m'avoir lu ! Que DIEU te bénisse ✨</span>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-vintage-terracotta mt-3 sm:mt-4">
              – VIE DE LOUANGE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
