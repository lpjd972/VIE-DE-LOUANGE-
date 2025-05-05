
import React from 'react';
import { MessageSquare } from 'lucide-react';

const Message = () => {
  return (
    <div className="vintage-section container mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Messages</h1>
      
      <div className="vintage-card max-w-3xl mx-auto text-center">
        <MessageSquare size={64} className="mx-auto text-vintage-cream/70 mb-6" />
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Espace Messages</h2>
        <p className="text-vintage-cream/90 mb-6">
          Cette section est en cours de développement. Elle contiendra bientôt des messages 
          inspirants liés à mon parcours musical et spirituel.
        </p>
        <div className="bg-vintage-terracotta/20 border border-vintage-terracotta/40 p-4 rounded-md mt-8">
          <p className="text-center italic font-medium">
            "La musique exprime ce qui ne peut être dit et sur quoi il est impossible de rester silencieux"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Message;
